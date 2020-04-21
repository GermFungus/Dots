import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from  '@angular/common/http';
import {Router} from "@angular/router";
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiparserService {
  constructor(
    private  httpClient:  HttpClient, private Router: Router
  ) { }


  hit(url, method, data, needRaw=false, headers=false){
    url = "http://localhost:4000" + url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
   
    return this.parse(
      this.httpClient[method](url, data, httpOptions).pipe(
        timeout(60000)
      ), needRaw, headers
    );
  }

  file(url, method, data, needRaw=false, headers=false){
    url = "http://localhost:4000" + url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
   
    return this.parse(
      this.httpClient[method](url, data).pipe(
        timeout(60000)
      ), needRaw, headers
    );
  }
  private parse(reqPromise, needRaw, headers){
    return new Promise((resolve, reject)=>{
      reqPromise.subscribe(function(res){
        let response = res ? (res.data || res) : res;
        resolve(response);
      }, (res)=>{
        if(res && res.status === 401){
          this.Router.navigate(['/']);
        }
        reject(res.error);
      });
    });
  }
}
