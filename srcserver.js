import express from 'express';
import { createServer } from 'http';
import { WispServer } from 'wisp-js';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const server = createServer(app);

// static frontend
app.use(express.static(path.join(__dirname, 'static')));

// wisp websocket endpoint
const wisp = new WispServer({ port: server, path: '/wisp/' });

const PORT = process.env.PORT || 8080;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`scramjet app listening on ${PORT}`);
});