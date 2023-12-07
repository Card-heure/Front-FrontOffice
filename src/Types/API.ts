export interface APIRequest {}

export class APIError extends Error {
  code: number = 0;
  message: string = "";
  data?: string = undefined;

  constructor(code: number, message: string, data: string | undefined) {
    super();
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
