import { Component, OnInit, Output } from '@angular/core';

import { ScanService } from '../../../../services/scan.service';
import { MessageService } from '../../../../services/message.service';
import { Message } from '../../../../services/interfaces/system-message';

@Component({
	selector: 'app-scan-select',
	templateUrl: './scan-select.component.html',
	styleUrls: ['./scan-select.component.scss']
})
export class ScanSelectComponent implements OnInit {
	

	systemMessage: Message;

	//text values are for multi-language support
	//TODO: make text values service
	textValues = {
		"All": "All",
		"Bands": "Bands",
		"RATs": "RATs",
		"Scan": "Scan",
		"Stop": "Stop"
	}

	//a band must be available to be selected
	availableBands: Array<any> = [
		{"band": "900", "available": true, "selected": true},
		{"band": "1800", "available": true, "selected": true},
		{"band": "1400", "available": true, "selected": true},
		{"band": "2100", "available": true, "selected": true},
		{"band": "2400", "available": false, "selected": false}
	];
	allBandsSelected: boolean = true;

	availableRats: Array<any> = [
		{"rat": "GSM", "available": true, "selected": true},
		{"rat": "UMTS", "available": true, "selected": true},
		{"rat": "LTE", "available": true, "selected": true},
	];

	allRatsSelected: boolean = true;

	//should we enable save?  TODO: make this logic actually do something meaningful
	//like open the save dialogue
	optionsChanged: boolean = false;

	scanBtnText = this.textValues.Scan;
	scanRunning: boolean = false;

	constructor(private scanService: ScanService, private messageSvc: MessageService) { }

	// "bts": {
	// 	"1": {
	// 		"id": "1",
	// 		"name": "",
	// 		"type": "dedicated / flexible",
	// 		"GSMSupport": "1",
	// 		"UMTSSupport": "1",
	// 		"LTESupport": "1",
	// 		"port": "4040",
	// 		"maxPower": "50",
	// 		"sdrId": "1",
	// 		"rfChainId": "1"
	// 	}

/*
	Need to know the available bands.  Current BTS config object needed which should 
	include the available bands, and that's it.  Will map to behavior subject.  

	Protocol selections to be sent separately
*/
	ngOnInit() {
		this.messageSvc.currentMessage.subscribe(message => {
			this._messageRecieved(message);
			console.log(message);
		});
	}
	//TODO: display message to user "Scan Completed, etc"
	_messageRecieved(message: Message){
		if(message.type === "scan"){
			switch(message['state']){
				case "completed": case "failed": 
					this.scanRunning = false;
					this.toggleScan();
					break;
				case "initiated":
					this.scanRunning = true;
					this.toggleScan();
					break; 
			}
		}
	}
	toggleAllRats(changedValue: boolean){
		this.allRatsSelected = this._areAllSelected(this.availableRats, changedValue);
	}
	toggleAllBand(changedValue: boolean){
		console.log("hi");
		this.allBandsSelected = this._areAllSelected(this.availableBands, changedValue);
	}
	_areAllSelected(changedArray: Array<any>, changedValue: boolean){
		if(changedValue){
			for(let i=0;i<changedArray.length;i++){
				if(changedArray[i].available){
					if(!changedArray[i].selected){
						return false;
					}
				}
			}
		}else {
			return false;
		}
		return true;
	}
	allBandsChanged(){
		this.allBandsSelected = !this.allBandsSelected;

		for(let i=0;i<this.availableBands.length;i++){
			if(this.availableBands[i].available){
				this.availableBands[i].selected = this.allBandsSelected;
			}
		}
	}
	allRatsChanged(){
		this.allRatsSelected = !this.allRatsSelected;

		for(let i=0;i<this.availableRats.length;i++){
			if(this.availableRats[i].available){
				this.availableRats[i].selected = this.allRatsSelected;
			}
		}
	}
	toggleScan(){
		if(!this.scanRunning){
			this.scanBtnText = this.textValues.Scan;
			// this._stopScan();
		}else {
			this.scanBtnText = this.textValues.Stop + ' ' + this.textValues.Scan;
			// this._runScan();
		}		
	}
	requestScan(){
		this._runScan();
	}
	_runScan() {
		this.scanService.requestScan(this.availableBands, this.availableRats);
	}
	_stopScan() {

	}
	// runScan(){
	// 	this.openScanList.emit(true);
	// }
	// getEnclosures() {

	// 	this.enclosureService.getEnclosures().subscribe(enclosures => {
	// 		this.localBTS = this.mapLocalBTS(enclosures);
	// 	});
	// 	// this.enclosureService.getEnclosures().subscribe(enclosures => this.enclosures = enclosures);
	// 	//this.enclosureService.getEnclosures().subscribe(function(enclosures) {console.log(enclosures)});
	// }
	// mapLocalBTS(enclosures) {
	// 	let localBTS = [];
	// 	for(let i=0; i<enclosures.length; i++){
	// 		if(enclosures[i]['sdr'] && enclosures[i]['sdr']['BTS'] && enclosures[i]['sdr']['protocols']){
	// 			let sdr = {
	// 				'id': enclosures[i]['id'],
	// 				'name': enclosures[i]['name'],
	// 				'protocols': enclosures[i].sdr['protocols'],
	// 				'bts': []
	// 			}
	// 			let protocolsObj = this._getProtocolsObj(enclosures[i]['sdr']['protocols']);

	// 			for(let k=0; k<enclosures[i]['sdr']['BTS'].length; k++){
	// 				sdr.bts.push({
	// 					'port': enclosures[i]['sdr']['BTS'][k],
	// 					'protocols': protocolsObj
	// 				}); 
	// 			}
	// 			localBTS.push(sdr);
	// 		}
	// 	};
	// 	console.log(localBTS);
	// 	return localBTS;
	// }
	// _getProtocolsObj(protocols: object) {
	// 	let protocolsObj = {
	// 		all: true
	// 	}; 

	// 	for (let key in protocols) {
	// 		if(protocols[key]){
	// 			protocolsObj[key] = true;
	// 		}
	// 	};

	// 	return protocolsObj;
	// }
	// selectAllGsChanged(protocol: string, event){
	// 	let allChanged = (protocol === "all");
	// 	let changeTo = event === 'true';
	// 	for(let i = 0; i<this.localBTS.length; i++){
	// 		if(allChanged){
	// 			this.localBTS[i] = this._changeAllProtocols(this.localBTS[i], changeTo);
	// 		}else if(this.localBTS[i].hasOwnProperty('protocol')){
	// 			this.localBTS[i][protocol] = event;
	// 		}
	// 	}

	// 	this.selectAllGsChanged = true;
	// 	console.log(changeTo);
	// 	console.log(this.localBTS);
	// }
	// _changeAllProtocols(bts: object, changeTo: boolean){
	// 	for (let key in bts) {
	// 		if(bts[key]){
	// 			bts[key] = changeTo;
	// 		}
	// 	};
	// 	return bts;
	// }

}
