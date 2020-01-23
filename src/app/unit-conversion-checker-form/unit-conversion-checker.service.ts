import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { UnitConversionChecker } from "./unit-conversion-checker";
import { UnitConversionCheckerResponse } from './unit-conversion-checker-response';

@Injectable({
  providedIn: "root"
})
export class UnitConversionCheckerService {
  
  private checkUrl = 'http://localhost:3000/api/v1/unit-convert';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  
  checkUnitConversion(packet: UnitConversionChecker):Observable<UnitConversionCheckerResponse> {
    return this.http.post<UnitConversionChecker>(this.checkUrl, packet, this.httpOptions)
    .pipe(
      tap((response: any) => this.log(`check Conversion ... Response was=${response.response}`)),
      catchError(this.handleError<UnitConversionCheckerResponse>('addHero'))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  
  }
}


