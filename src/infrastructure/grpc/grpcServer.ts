import type { GrpcServer } from '../../ports/grpc.js';

export class NodeGrpcServer implements GrpcServer {
  async start(): Promise<void> {
    throw new Error('gRPC server start not implemented');
  }
  async stop(): Promise<void> {
    throw new Error('gRPC server stop not implemented');
  }
}

