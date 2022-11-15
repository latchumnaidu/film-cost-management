import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { IHttpClient, IHttpClientRequestParameters } from '../constants/axiosConstants';

export class AxiosService implements IHttpClient {
    get<T>(parameters: IHttpClientRequestParameters): Promise<T> {
        return new Promise<T>((resolve, reject) => {
          // extract the individual parameters
          const { url, accessToken } = parameters 
      
          // axios request options like headers etc
          let options: AxiosRequestConfig = {} as AxiosRequestConfig
      
          // if API endpoint requires a token, we'll need to add a way to add this.
          if (accessToken) {
            options.headers.Authorization = accessToken
          }
      
          // finally execute the GET request with axios:
          axios
            .get(url, options)
            .then((response: any) => {
              resolve(response.data as T)
            })
            .catch((response: any) => {
              reject(response)
            })
      
        })
      };
      post<T>(parameters: IHttpClientRequestParameters): Promise<T> {
        return new Promise<T>((resolve, reject) => {
          const { url, payload, accessToken } = parameters
      
          // axios request options like headers etc
          const options: AxiosRequestConfig = {} as AxiosRequestConfig;
      
          // if API endpoint requires a token, we'll need to add a way to add this.
        //   if (accessToken) {
        //     options.headers.Authorization = accessToken
        //   }
      
          // finally execute the GET request with axios:
          axios
            .post(url, payload, options)
            .then((response: any) => {
              resolve(response.data as T)
            })
            .catch((response: any) => {
              reject(response)
            })
        })
      }
}
export const axiosService = new AxiosService()