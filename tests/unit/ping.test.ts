import request from 'supertest';
import express from 'express';
import { router as apiRouter } from '../../src/api/routes/index.js';
import { errorHandler } from '../../src/middleware/errorHandler.js';

const app = express();
app.use(express.json());
app.use('/api/v1', apiRouter);
app.use(errorHandler);

test('GET /api/v1/ping returns pong', async () => {
  const res = await request(app).get('/api/v1/ping?name=Akshit');
  expect(res.status).toBe(200);
  expect(res.body.message).toContain('Akshit');
});
