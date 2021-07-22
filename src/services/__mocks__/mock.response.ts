/* eslint-disable @typescript-eslint/no-explicit-any */
export default class MockResponse {
  data: {};
  status: number;
  statusText: string;
  headers: {};
  config: {};
  constructor(data: any, headers?: any) {
    this.data = {};
    this.status = 200;
    this.statusText = "OK";
    this.headers = {};
    this.config = {};

    if (data) {
      this.data = data;
    }

    if (headers) {
      this.headers = headers;
    }
  }
}
