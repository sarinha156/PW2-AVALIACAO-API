import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import {retry, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdicaoAPIServiceService {
  apiUrl: string = "http://172.16.58.22:8001/api/funcoes/adicao"; 
  constructor(private httpClient: HttpClient) { }
  handleError(error) { 
    let errorMessage = `Código de error: ${error.status}\nMessagem: ${error.message}`;
    alert(errorMessage);
    return throwError(errorMessage);
  }

  getAdicao(num1: string, num2: string) : Observable<string>{
    let params = new HttpParams().set("num1", num1).set("num2", num2);
    return this.httpClient.get<string>(this.apiUrl, {params})
                          .pipe(retry(1),
                          catchError(this.handleError));
  }
}