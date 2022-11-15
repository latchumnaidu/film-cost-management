export interface IHttpClientRequestParameters {
    url: string
    accessToken: string
    payload?: any
  }
  
export interface IHttpClient {
    get<T>(parameters: IHttpClientRequestParameters): Promise<T>
    post<T>(parameters: IHttpClientRequestParameters): Promise<T>
  }
  