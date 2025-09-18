import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { router as apiRouter } from './api/routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';
import { requestId } from './middleware/requestId.js';
import { loggingMiddleware } from './middleware/logging.js';
import { metricsMiddleware, metricsEndpoint } from './observability/metrics.js';
import { healthRouter } from './observability/healthcheck.js';
import { loadConfig } from './config/index.js';
import { chaosMiddleware } from './middleware/chaos.js';

const config = loadConfig();
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(requestId);
app.use(loggingMiddleware);
app.use(metricsMiddleware);
app.use(chaosMiddleware);

// Health & metrics
app.use(healthRouter);
app.get('/metrics', metricsEndpoint);

// API routes
app.use('/api/v1', apiRouter);

// Error handling
app.use(errorHandler);

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  console.log(`[startup] ${config.serviceName} listening on :${port}`);
});
