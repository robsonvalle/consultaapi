import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Lancamento } from 'src/model/lancamento';
import { Resumo } from 'src/model/resumo';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://localhost:8080/api/pedidos/todos';
const apiUrl2 = 'http://localhost:8080/api/pedidos';
const apiUrl3 = 'http://localhost:8080/api/pedidos/resumo';
const apiResumo = 'http://localhost:8080/api/resumos/mes';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getPedidos (): Observable<Lancamento[]> {
    return this.http.get<Lancamento[]>(apiUrl)
      .pipe(
        tap(lancamentos => console.log('leu os Lancamentos')),
        catchError(this.handleError('getPedidos', []))
      );
  }

  getResumo (): Observable<Lancamento[]> {
    return this.http.get<Lancamento[]>(apiUrl3)
      .pipe(
        tap(lancamentos => console.log('leu os Lancamentos')),
        catchError(this.handleError('getPedidos', []))
      );
  }

  getMes (): Observable<Resumo[]> {
    return this.http.get<Resumo[]>(apiResumo)
      .pipe(
        tap(resumos => console.log('leu os Resumos')),
        catchError(this.handleError('getMes', []))
      );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

  addLancamento (lancamento): Observable<Lancamento> {
    return this.http.post<Lancamento>(apiUrl2, lancamento, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((lancamento: Lancamento) => console.log(`adicionou o produto com w/ id=${lancamento.numpedido}`)),
      catchError(this.handleError<Lancamento>('addLancamento'))
    );
  }

}


