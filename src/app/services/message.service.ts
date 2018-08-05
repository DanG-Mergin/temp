import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Message } from './interfaces/system-message';


@Injectable()
export class MessageService {
	private defaultMessage: Message = {
      "id": "1",
      "type": "default",
      "state": "complete",
      "text": "subscribed to message service",
      "data": {"result": true}
    }

	private messageSource = new BehaviorSubject<Message>(this.defaultMessage);
	currentMessage = this.messageSource.asObservable();

	constructor() { }

	changeMessage(message: Message) {
		this.messageSource.next(message);
	}

	//TODO: Considering implementing system wide broadcast here based on type.  Look into angular Toastr first
	subscribeByService(type: string, message: Message){

	}

	// private messageSource = new BehaviorSubject<string>("default message");
	// currentMessage = this.messageSource.asObservable();

	// constructor() { }

	// changeMessage(message: string) {
	// 	this.messageSource.next(message);
	// }
}
