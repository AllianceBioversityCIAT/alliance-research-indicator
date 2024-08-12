import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, map } from 'rxjs';
import { MainResponse } from '../interfaces/responses.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ToPromiseService {
  constructor(public http: HttpClient) {}

  private TP = (subscription: Observable<any>, dataConfig?: DataConfig): Promise<MainResponse<any>> => {
    return new Promise(async resolve => {
      try {
        resolve(await firstValueFrom(subscription.pipe(map(data => ({ ...data, successfulRequest: true })))));
      } catch (error: any) {
        console.error(error);
        resolve({ ...error, successfulRequest: false, errorDetail: error.error.description });
      }
    });
  };

  post = (url: string, body: any, token?: string) => {
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.TP(this.http.post<any>(environment.apiBaseUrl + url, body, { headers }));
  };

  put = (url: string, body: any) => {
    return this.TP(this.http.put<any>(environment.apiBaseUrl + url, body));
  };

  get = (url: string, dataConfig?: DataConfig) => {
    return this.TP(this.http.get<any>(environment.apiBaseUrl + url), dataConfig);
  };

  patch = (url: string, body: any) => {
    return this.TP(this.http.patch<any>(environment.apiBaseUrl + url, body));
  };
}

interface DataConfig {
  flatten?: boolean;
}
