import { Component } from '@angular/core';

import { BTS } from '../../services/BTS';
import { EmulateComponent } from '../emulate/emulate.component';
import { EmulateDetailComponent } from '../emulate/emulate-detail/emulate-detail.component';

import { MessageService } from '../../services/message.service';
import { Message } from '../../services/interfaces/system-message';


@Component({
  selector: 'app-full-layout-page',
  templateUrl: './full-layout-page.component.html',
  styleUrls: ['./full-layout-page.component.scss']
})
export class FullLayoutPageComponent {
	// message:Message;
	selectedBTS: BTS[];
	listActive: boolean = true;
	mapActive: boolean = false;
	cellsPopulated: boolean = false;

	constructor(private messageSvc: MessageService) {}

	ngOnInit() {
		this.messageSvc.currentMessage.subscribe(message => {
			this._messageRecieved(message);
			console.log(message);
		});
	}
	//TODO: display message to user "Scan Completed, etc".  Probably using Toastr
	_messageRecieved(message: Message){
		if(message.type === "scan"){
			switch(message['state']){
				case "completed": 
					this.cellsPopulated = true;
					break;
				case "initiated": case "failed": 
					
					break; 
			}
		}
	}	
}
