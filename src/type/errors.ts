export class GenericError {
  readonly type: string = "GenericError";
  message: string = "An unexpected error occurred";

  constructor(message?: string) {
    if (message) this.message = message;
  }
}

export class NetworkError extends GenericError {
  type = "NetworkError";
}
