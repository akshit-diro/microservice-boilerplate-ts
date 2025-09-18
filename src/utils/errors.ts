export class AppError extends Error {
  code: string; statusCode: number;
  constructor(code: string, message: string, statusCode = 500) {
    super(message); this.code = code; this.statusCode = statusCode;
  }
}
export const Errors = {
  INVALID_ARGUMENT: (msg='Invalid argument') => new AppError('INVALID_ARGUMENT', msg, 400),
  NOT_FOUND: (msg='Not found') => new AppError('NOT_FOUND', msg, 404),
  CONFLICT: (msg='Conflict') => new AppError('CONFLICT', msg, 409),
  INTERNAL: (msg='Internal error') => new AppError('INTERNAL', msg, 500),
};
