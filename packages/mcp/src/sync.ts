#!/usr/bin/env node
import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';

const PORT = 3042;
const OBSERVER_DIR = path.join(process.cwd(), '.observer');
const ANNOTATIONS_FILE = path.join(OBSERVER_DIR, 'annotations.json');

const server = http.createServer((req, res) => {
  // CORS Headers for browser requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'GET' && req.url === '/sync') {
    try {
      if (fs.existsSync(ANNOTATIONS_FILE)) {
        const content = fs.readFileSync(ANNOTATIONS_FILE, 'utf-8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(content);
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('[]');
      }
    } catch (e) {
      res.writeHead(500);
      res.end('Server Error');
    }
    return;
  }

  if (req.method === 'POST' && req.url === '/sync') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const annotation = JSON.parse(body);

        // Ensure directory exists
        if (!fs.existsSync(OBSERVER_DIR)) {
          fs.mkdirSync(OBSERVER_DIR, { recursive: true });
        }

        // Read existing annotations
        let annotations: any[] = [];
        if (fs.existsSync(ANNOTATIONS_FILE)) {
          const content = fs.readFileSync(ANNOTATIONS_FILE, 'utf-8');
          try {
            annotations = JSON.parse(content);
            if (!Array.isArray(annotations)) annotations = [];
          } catch(e) {
            annotations = [];
          }
        }

        // Update or append
        const index = annotations.findIndex(a => a.id === annotation.id);
        if (index >= 0) {
          annotations[index] = annotation;
        } else {
          annotation.status = 'open'; // default status
          annotations.push(annotation);
        }

        // Write back
        fs.writeFileSync(ANNOTATIONS_FILE, JSON.stringify(annotations, null, 2), 'utf-8');

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Saved successfully.' }));
      } catch (err) {
        console.error('[Observer Sync] Error parsing JSON:', err);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Bad Request' }));
      }
    });
  } else if (req.method === 'DELETE' && req.url === '/sync') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const idsToDelete: string[] = JSON.parse(body);
        if (!Array.isArray(idsToDelete)) throw new Error('Expected array of IDs');

        let annotations: any[] = [];
        if (fs.existsSync(ANNOTATIONS_FILE)) {
          const content = fs.readFileSync(ANNOTATIONS_FILE, 'utf-8');
          try { annotations = JSON.parse(content); } catch (e) {}
        }

        annotations = annotations.filter(a => !idsToDelete.includes(a.id));
        fs.writeFileSync(ANNOTATIONS_FILE, JSON.stringify(annotations, null, 2), 'utf-8');

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Deleted successfully.' }));
      } catch (err) {
        console.error('[Observer Sync] Error in DELETE:', err);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Bad Request' }));
      }
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`[Observer Sync] Listening on http://localhost:${PORT}`);
  console.log(`[Observer Sync] Saving annotations to ${ANNOTATIONS_FILE}`);
});
