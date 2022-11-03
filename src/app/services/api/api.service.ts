import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import config from 'src/app/config';
import APIResponse from 'src/app/models/APIResponse/APIResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = config.apiRoot
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${this.accessToken}`
  })
  constructor(private httpClient: HttpClient) { }

  get(url:string): Observable<APIResponse> {
    return this.httpClient.get<APIResponse>(`${this.apiUrl}/${url}`, 
      {
        headers: this.headers
      })
  }
}
