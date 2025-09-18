export interface GrpcServer {
  start(): Promise<void>;
  stop(): Promise<void>;
}

