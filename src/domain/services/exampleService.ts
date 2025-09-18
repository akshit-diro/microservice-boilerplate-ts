import { v4 as uuid } from 'uuid';
import type { Example } from '../models/example.js';

export function createExample(): Example {
  return { id: uuid(), createdAt: new Date() };
}
