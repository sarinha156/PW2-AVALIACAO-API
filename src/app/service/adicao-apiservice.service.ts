import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Adicao } from '../model/Adicao';
// import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdicaoAPIServiceService {
  apiURL: string = "http://172.16.58.22:8001/api/swagger-ui.html"
  // apiURL : string = "/proxy/Projetos";
  constructor( private httpClient : HttpClient) { }
  handleError(error) {
    let errorMessage = `Código de erro: ${error.status}\nMensagem:${error.message}`;
    alert(errorMessage);
    return throwError(errorMessage);
  }
  getAdicao() : Observable <Adicao[]>{
    return this.httpClient.get<Adicao[]>(this.apiURL)
                          .pipe(retry(1),catchError(this.handleError))
  }
  createAdicao(adicao: Adicao): Observable<Adicao> {
    return this.httpClient.post<Adicao>(this.apiURL, adicao)
    .pipe(retry(1),
    catchError(this.handleError));
    }
}
