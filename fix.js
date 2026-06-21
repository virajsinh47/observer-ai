const fs = require('fs');
const file = 'packages/core/src/index.ts';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/\\`/g, '`');
content = content.replace(/\\\${/g, '${');
fs.writeFileSync(file, content);
