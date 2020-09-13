import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";
import { AppConfig } from "../app.config";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private defaultRequestOptions: any = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    }),
    params: new HttpParams(),
  };

  url: string = "assets";
  api_url: string = AppConfig.API_URL;

  constructor(private http: HttpClient) {}

  setHeader(key: string, value: string): void {
    // HttpHeaders is immutable
    this.defaultRequestOptions.headers = this.defaultRequestOptions.headers.set(
      key,
      value
    );
  }

  clearHeader(): void {
    this.defaultRequestOptions.headers = new HttpHeaders();
  }

  resetParams(): void {
    if (this.defaultRequestOptions.params)
      this.defaultRequestOptions.params = new HttpParams();
  }

  getMock(endpoint: string, params?: any, reqOpts?: any): Observable<any> {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams(),
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + "/" + endpoint, reqOpts).pipe();
  }

  get(endpoint: string, params?: any, reqOpts?: any): Observable<any> {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams(),
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.api_url + "/" + endpoint, reqOpts).pipe(share());
  }

  post(endpoint: string, body: any): Observable<any> {
    this.resetParams();
    return this.http.post(
      this.api_url + "/" + endpoint,
      body,
      this.defaultRequestOptions
    );
  }

  postFormData(endpoint: string, body: FormData): Observable<any> {
    this.resetParams();
    return this.http.post(
      this.api_url + "/" + endpoint,
      body,
      this.defaultRequestOptions
    );
  }

  // post(endpoint: string, body: any): Observable<any> {
  //   this.resetParams();
  //   let seq = this.http.post(
  //     this.api_url + "/" + endpoint,
  //     body,
  //     this.defaultRequestOptions
  //   );
  //   seq.subscribe(
  //     (data) => {
  //       console.log("*** post : " + endpoint);
  //       console.log(data);
  //     },
  //     (httpError: HttpErrorResponse) => {
  //       console.log("*** post error : " + endpoint);
  //       console.log(httpError);
  //     }
  //   );
  //   return seq;
  // }

  put(endpoint: string, body: any) {
    this.resetParams();
    return this.http.put(
      this.api_url + "/" + endpoint,
      body,
      this.defaultRequestOptions
    );
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + "/" + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + "/" + endpoint, body, reqOpts);
  }
}
