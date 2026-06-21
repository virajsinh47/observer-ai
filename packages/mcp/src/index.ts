#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';

import * as fs from 'fs';
import * as path from 'path';

const getAnnotationsFile = () => {
  return path.join(process.cwd(), '.observer', 'annotations.json');
};

const readAnnotations = () => {
  const file = getAnnotationsFile();
  if (!fs.existsSync(file)) return [];
  try {
    const data = fs.readFileSync(file, 'utf-8');
    return JSON.parse(data) || [];
  } catch(e) {
    return [];
  }
};

const writeAnnotations = (data: any[]) => {
  const file = getAnnotationsFile();
  const dir = path.dirname(file);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
};

const server = new Server(
  {
    name: 'observer-ai-mcp',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
      resources: {}
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'get_pending_annotations',
        description: 'Fetch all unresolved UI visual annotations logged by the developer.',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'mark_annotation_resolved',
        description: 'Mark a visual UI annotation as fixed after updating the code.',
        inputSchema: {
          type: 'object',
          properties: {
            annotationId: {
              type: 'string',
              description: 'The ID of the annotation to mark as resolved.'
            }
          },
          required: ['annotationId']
        }
      },
      {
        name: 'acknowledge_annotation',
        description: 'Acknowledge an annotation to let the user know you are working on it.',
        inputSchema: {
          type: 'object',
          properties: {
            annotationId: {
              type: 'string',
              description: 'The ID of the annotation.'
            }
          },
          required: ['annotationId']
        }
      },
      {
        name: 'dismiss_annotation',
        description: 'Dismiss an annotation if you decide not to fix it.',
        inputSchema: {
          type: 'object',
          properties: {
            annotationId: {
              type: 'string',
              description: 'The ID of the annotation.'
            },
            reason: {
              type: 'string',
              description: 'The reason for dismissing it.'
            }
          },
          required: ['annotationId', 'reason']
        }
      }
    ]
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const annotations = readAnnotations();

  if (request.params.name === 'get_pending_annotations') {
    const pending = annotations.filter((a: any) => a.status === 'open');
    return {
      content: [{ type: 'text', text: JSON.stringify(pending, null, 2) }]
    };
  }

  if (request.params.name === 'mark_annotation_resolved') {
    const id = request.params.arguments?.annotationId;
    const index = annotations.findIndex((a: any) => a.id === id);
    if (index >= 0) {
      annotations[index].status = 'resolved';
      writeAnnotations(annotations);
      return {
        content: [{ type: 'text', text: `Annotation ${id} marked as resolved.` }]
      };
    }
    return {
      content: [{ type: 'text', text: `Annotation ${id} not found.` }]
    };
  }

  if (request.params.name === 'acknowledge_annotation') {
    const id = request.params.arguments?.annotationId;
    const index = annotations.findIndex((a: any) => a.id === id);
    if (index >= 0) {
      annotations[index].status = 'acknowledged';
      writeAnnotations(annotations);
      return {
        content: [{ type: 'text', text: `Annotation ${id} marked as acknowledged.` }]
      };
    }
    return {
      content: [{ type: 'text', text: `Annotation ${id} not found.` }]
    };
  }

  if (request.params.name === 'dismiss_annotation') {
    const id = request.params.arguments?.annotationId;
    const reason = request.params.arguments?.reason;
    const index = annotations.findIndex((a: any) => a.id === id);
    if (index >= 0) {
      annotations[index].status = 'dismissed';
      annotations[index].dismissReason = reason;
      writeAnnotations(annotations);
      return {
        content: [{ type: 'text', text: `Annotation ${id} marked as dismissed.` }]
      };
    }
    return {
      content: [{ type: 'text', text: `Annotation ${id} not found.` }]
    };
  }

  throw new Error('Tool not found');
});

async function run() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('[Observer AI] MCP Server running on stdio');
}

run().catch(console.error);
