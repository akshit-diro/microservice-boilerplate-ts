import type { Request, Response, NextFunction } from 'express';
import pino from 'pino';
import pinoHttp from 'pino-http';

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
export const loggingMiddleware = pinoHttp({ logger });

export type Logger = typeof logger;
export const appLogger = logger;
