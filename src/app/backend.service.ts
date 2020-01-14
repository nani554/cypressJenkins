import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from 'protractor';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
@Injectable()

export class Backend {
    constructor(private http: HttpClient) {}

    back() {
        return this.http.get<Config>('http://192.168.1.207:8080/jobseeker/alljobseekers', httpOptions);
    }
}