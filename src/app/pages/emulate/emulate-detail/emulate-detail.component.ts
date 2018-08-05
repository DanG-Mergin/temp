// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { BTS } from '../../../services/BTS';

import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

import { Message } from '../../../services/interfaces/system-message';
import { GuiFakeCell } from '../../../services/interfaces/fake-cell';

import { MessageService } from '../../../services/message.service';
import { FakeCellsService } from '../../../services/fake-cells.service';
import { InterceptService } from '../../../services/intercept.service';


//TODO: need to deselect other options if the combinations don't align
//For example if someone is already using a band
@Component({
  selector: 'app-emulate-detail',
  templateUrl: './emulate-detail.component.html',
  styleUrls: ['./emulate-detail.component.scss']
})

export class EmulateDetailComponent implements OnInit {
	@Input() fakeCell: GuiFakeCell; 

	// @Output() toggleCollapse: EventEmitter<boolean> =  new EventEmitter<boolean>();
	isCollapsed: boolean = true;
	isTransmitting: boolean = false;

	public powerSliderConfig: any = {
		start: 0,
		range: {
			min: 0,
			max: 40
		}, 
		step: 1
	};
	// tooltips: true,

	//text values are for multi-language support
	//TODO: make text values service
	textValues = {
		"All": "All",
		"Bands": "Bands",
		"RATs": "RATs",
		"Scan": "Scan",
		"Stop": "Stop"
	};
	popoverValues = {
		"EmulateBand": "To change the band: please re-run automatic configuration"
	};

	constructor(private elRef: ElementRef, private messageSvc: MessageService, private interceptSvc: InterceptService) { }

	ngOnInit() {
		this.fakeCell = this.fakeCell;
		this.messageSvc.currentMessage.subscribe(message => {
            this._messageRecieved(message);
            console.log(message);
        });

	}
	_messageRecieved(message: Message){
		if(message.type === "transmit-all"){
			switch(message['state']){
				case "initiated":
					if(!this.isTransmitting){
						this.toggleTransmitting();
					}
					break; 
				case "completed": 
					break;
				case "terminated": 
					if(this.isTransmitting){
						this.toggleTransmitting();
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
	toggleTransmitting(){
		this.isTransmitting = !this.isTransmitting;
		if(this.isTransmitting){
			if(!this.isCollapsed){
				this.toggleExpand();
			}
			//TODO: add validation against the form here
			this._transmit();
		}
	}
	toggleExpand() {
		console.log('toggle expand');
		this.isCollapsed = !this.isCollapsed;
		if(this.isCollapsed){
			this.elRef.nativeElement.classList.remove('bts-parent-expanded');
			this.elRef.nativeElement.classList.remove('order-first');
			// this.elRef.nativeElement.classList.add('col'); 
		}else {
			this.elRef.nativeElement.classList.add('order-first');
			this.elRef.nativeElement.classList.add('bts-parent-expanded');
			this.elRef.nativeElement.classList.remove('col');
		}
	}
	_transmit(){
		this.interceptSvc.transmitSelected([this.fakeCell]);
	}
}