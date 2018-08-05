import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

import { BTS } from './BTS';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BTSService {
	private scanURL = 'api/scan';
  //btsSelections = [];

  //observable bts selections source 
  private btsSelections = new BehaviorSubject<BTS[]>([]);
  //observable bts selections stream
  // currentBtsSelection = this.btsSelections.asObservable();

	constructor(private http: HttpClient) { 

	}
  getBTS(): Observable<BTS[]> {
    console.log("in getBTS");
    return this.http.get<BTS[]>(this.scanURL)
    .pipe(
      tap(scans => this.log(`fetched scans`)),
      catchError(this.handleError('getScans', []))
    );

  }
  
  setSelectedBTS(btsArr: Array<BTS>){
    if(btsArr.length){
      console.log('setSelectedBTS called');
      console.log(this.btsSelections);
      this.btsSelections.next(btsArr);
 
    }
  }

  getAllSelectedBTS() {
    console.log('getAllSelectedBTS called');
    console.log(this.btsSelections);
    return this.btsSelections.asObservable();

    
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
      return Observable.of(result as T);
    };
  }

   /** TODO: add a  MessageService */
  private log(message: string, value?) {
  	console.log(message);
  	console.log(value || '');
    //this.messageService.add('ScanService: ' + message);
  }
}

