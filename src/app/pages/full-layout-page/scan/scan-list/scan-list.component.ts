import { Component, OnInit } from '@angular/core';

import { ScanService } from '../../../../services/scan.service';
import { ScanList } from '../../../../services/interfaces/scan';
import { MessageService } from '../../../../services/message.service';
import { Message } from '../../../../services/interfaces/system-message';


@Component({
	selector: 'app-scan-list-component',
	templateUrl: './scan-list.component.html',
	styleUrls: ['./scan-list.component.scss']
})
export class ScanComponent implements OnInit {
	rows: any[];
	selected = [];

	 public allTransmitting = false;
    public showMe = false;
    public txAllText = "Transmit All Selected";
	// message: string;

	//TODO: tie scan list to a behavior subject
	constructor(private scanService: ScanService, private messageSvc: MessageService) { 
		//console.log(this.subscribeToCells());
	}

	ngOnInit() {
		this.rows = this.rows;
		this.txAllText = "Transmit All Selected";
		console.log("HI");
		this.messageSvc.currentMessage.subscribe(message => this._messageRecieved(message));
		//this.scanService.getAllSelectedCells().subscribe(selected => this.selected = selected);
		this.subscribeToCells();
	}
	
	newMessage(state: string, type: string) {
        let message: Message = {
            state: state,
            type: type
        }

        this.messageSvc.changeMessage(message);
    }

	subscribeToCells() {
		this.scanService.subscribeToScanList().subscribe(scanList => {
			console.log(scanList);
			this.rows = scanList});
	}

	onSelect({ selected }) {
		console.log('Select Event', selected, this.selected);

		this.selected.splice(0, this.selected.length);
		this.selected.push(...selected);
	}
	transmitAllToggled(){
        this.allTransmitting = !this.allTransmitting;
        if(this.allTransmitting){
            this.txAllText = "Stop All Transmissions";
            this.newMessage('initiated', 'transmit-all');
        }else {
            this.txAllText = "Transmit All";
            this.newMessage('terminated', 'transmit-all');
        }
    }

	 _messageRecieved(message: Message){
        
        if(message.type === "transmit"){
            switch(message['state']){
                case "initiated":
                if(!this.allTransmitting){
                    this.allTransmitting = true;
                    this.txAllText = "Transmit All Selected";
                }
                break; 
                case "completed": 
                break;
                case "terminated": 
					if(this.allTransmitting){
						this.allTransmitting= false;
						this.txAllText = "Transmit All Selected";
					}
					break;
                case "failed": 
                    //TODO: add logic for determining if we're transmitting.  
                    //likely an update through the intercept pipe, or ids in the 
                    //message itself
                    break;
                }
            }
        }

	onActivate(event) {
		// console.log('Activate Event', event);
	}
	requestAutoConfig() {
		console.log("hi");
		this.scanService.setSelectedCells(this.selected);
	}

}
