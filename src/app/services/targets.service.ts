import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Target } from './target';

// const httpOptions = {
// 	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class TargetService {
	private targetsURL = 'api/targets';
	
	private targetSelections = new BehaviorSubject<Target[]>([]);
	//observable target selections stream
	currentTargetSelection = this.targetSelections.asObservable();

	constructor(private http: HttpClient) { 

	}
	getTargets(): Observable<Target[]> {
		return this.http.get<Target[]>(this.targetsURL)
		.pipe(
			tap(targets => this.log(`fetched targets`)),
			catchError(this.handleError('getTargets', []))
			);
		//return Observable.of(this.targets);
	}

	setSelectedTarget(targetArr: Array<Target>){
		if(targetArr.length){
			console.log('setSelectedTarget called');
			console.log(this.targetSelections);
			this.targetSelections.next(targetArr);
		}
	}
	getAllSelectedTargets() {
		console.log('getAllSelectedTarget called');
		console.log(this.targetSelections);
		return this.targetSelections.asObservable();
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
    //this.messageService.add('TargetService: ' + message);
}
}
