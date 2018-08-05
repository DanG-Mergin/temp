import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
//TODO: Delete this whole thing and write a proper transmit service
export class FakeCellsService {
	fakeCellList = [];
	constructor() { }
	// private scanListRx = new BehaviorSubject<ScanList[]>([])

	getAutoRecommendations(){

	}
// import { Injectable } from '@angular/core';

// import { Observable, BehaviorSubject } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';

// import { Cell } from './interfaces/cell';
// import { ScanList } from './interfaces/scan';

// //TODO: integrate with Toastr???
// import { MessageService } from './message.service';
// import { Message } from './interfaces/system-message';

// @Injectable()
// export class ScanService {

// 	private scanListRx = new BehaviorSubject<ScanList[]>([]);
// 	//observable scan selections stream
// 	private scanSelectionsRx = new BehaviorSubject<ScanList[]>([]);
// 	// scanSelections = this.scanSelectionsRx.asObservable();

// 	//fake cells which should be coming from the server
// 	mockCellList = [];
// 	private filteredFakeScan = [];
// 	private fakeScanIndex = {
// 		"band": {},
// 		"id": {},
// 		"rat": {} 
// 	};
// 	counter = 0;

// 	// fakeScanResults = [];

// 	//Note we should have a single source of truth for cells: MCH 
// 	constructor(private messageSvc: MessageService) { 
// 		this._setMockCellList();
// 		this._constructIndex();
// 	}
// 	//TODO: Performance: Don't forget to debounce.  
// 	//Might want to get this index from the middle layer
// 	//TODO: anonymize this and make it recursive
// 	_constructIndex(){
// 		for(let i=0; i<this.mockCellList.length; i++){
// 			if(this.mockCellList[i].id){
// 				let id = this.mockCellList[i].id;
// 				//create the bands
// 				if(this.mockCellList[i]['band'] &&
// 					!this.fakeScanIndex['band'][this.mockCellList[i].band]){
					
// 					this.fakeScanIndex['band'][this.mockCellList[i].band] = {};
// 			}
// 			this.fakeScanIndex['band'][this.mockCellList[i].band][id] = i; 


// 			if(this.mockCellList[i]['rat'] && !this.fakeScanIndex['rat'][this.mockCellList[i].rat]){
// 				this.fakeScanIndex['rat'][this.mockCellList[i].rat] = {};
// 			}
// 			this.fakeScanIndex['rat'][this.mockCellList[i].rat][id] = i;

// 			this.fakeScanIndex['id'][id] = i; 
// 		}
// 	}
// 	console.log('index', this.fakeScanIndex);
// 	}
// 	getCellById(id: string){
// 		if(this.fakeScanIndex['id'][id] && this.mockCellList[this.fakeScanIndex['id'][id]]){
// 			return this.mockCellList[this.fakeScanIndex['id'][id]];
// 		}
// 	}
// 	getCellsByBand(band: string){
// 		if(this.fakeScanIndex['band'][band]){
// 			let cells: Array<any> = [],
// 			cellsByBandList = this.fakeScanIndex['band'][band];

// 			for(let id in cellsByBandList){
// 				if(this.mockCellList[cellsByBandList[id]]){
// 					cells.push(this.mockCellList[cellsByBandList[id]]);
// 				}
// 			}
// 			return cells;
// 		}
// 	}

// 	getCellsByProperty(key: string, value: string){
// 		if(this.fakeScanIndex[key] && this.fakeScanIndex[key][value]){

// 			let cells: Array<any> = [],
// 			cellsByKey = this.fakeScanIndex[key][value];

// 			for(let id in cellsByKey){
// 				if(this.mockCellList[cellsByKey[id]]){
// 					cells.push(this.mockCellList[cellsByKey[id]]);
// 				}
// 			}
// 			return cells;
// 		}
// 		return false;
// 	}
// 	/*return = {
// 			{'GSM': {}}, 'UMTS': {}}
// 		}*/
// 	getIdsByPropertyAndValues(key: string, values: Array<string>){
// 		let matches = {};
// 		if(this.fakeScanIndex[key]){
// 			for(let i=0; i<values.length; i++){
// 				if(this.fakeScanIndex[key][values[i]]){
// 					matches[values[i]] = this.fakeScanIndex[key][values[i]];
// 				}
// 			}
// 		}
// 		//console.log("matches: ", matches);
// 		return matches;

// 	}
// 	//Return cells by multiple properties in the format of: 
// 	//args = {'band': ['1800', '900'], 'rat': ['GSM', 'UMTS']}
// 	/*return = {
// 				'band':{
// 					'1800': {'GSM': [], 'UMTS': []},
// 					'900': {'GSM': [], 'UMTS': []}
// 					}
// 				}
// 				'band': {'1800': {'1'}},
// 				'rat': {'GSM': {'1'}}
// 				*/
// 	//TODO: this desperately needs recursion and refactoring
// 	filterIdsByTwoProperties(args: object, flatten?: boolean){
// 		let allMatches = {},
// 		filteredMatches = {},
// 		topKeys = [];

// 		let allMatchingIds = [];

// 		for(let key in args){
// 			if(this.fakeScanIndex[key]){
// 				topKeys.push(key);
// 				if(!allMatches[key]){allMatches[key]}
// 					allMatches[key] = this.getIdsByPropertyAndValues(key, args[key]);
// 			}
// 		}
// 		filteredMatches[topKeys[0]]= {};
// 		for(let key in allMatches[topKeys[0]]){
// 			let currentOne = allMatches[topKeys[0]][key];
// 			for(let blah in allMatches[topKeys[1]]){
// 				for(let firstId in currentOne){
// 					// console.log(this.getCellById(firstId));
// 					for(let indexId in this.fakeScanIndex[topKeys[1]][blah])
// 					if(firstId === indexId){
// 						allMatchingIds.push(firstId);
// 					}
// 				}
// 			}
// 		}

		

// 		// for(let prop in allMatches[topKeys[0]]){
// 		// 	let currentPrikNode = allMatches[topKeys[0]][prop];
// 		// 	filteredMatches[topKeys[0]][prop] = {};

// 		// 	for(let firstId in currentPrikNode){
// 		// 		for(let compareProp in allMatches[topKeys[1]]){
// 		// 			for(let secondId in allMatches[topKeys[1]][compareProp]){
// 		// 				if(firstId === secondId){
// 		// 					allMatchingIds.push(allMatches[topKeys[1]][compareProp][secondId]);
// 		// 					// filteredMatches[topKeys[0]][prop][compareProp] = [];
// 		// 					// filteredMatches[topKeys[0]][prop][compareProp].push(secondId);
// 		// 					// filteredMatches[topKeys[0]][prop][compareProp] = {};
// 		// 					// filteredMatches[topKeys[0]][prop][compareProp][secondId] = allMatches[topKeys[1]][compareProp][secondId];
// 		// 				}	
// 		// 			}
// 		// 		}

// 		// 	}
// 		// }
// 		let unique = Array.from(new Set(allMatchingIds));
// 		return unique;

// 		// console.log(filteredMatches);
		
// 		//return filteredMatches;
// 	}

// 	setSelectedCells(scanArr: Array<ScanList>){
// 		if(scanArr.length){
// 			console.log('setSelectedCells called');
// 			console.log(this.scanSelectionsRx);
// 			this.scanSelectionsRx.next(scanArr);
// 		}
// 	}	


// 	getAllSelectedCells(){
// 		//this.fakeScanIndex.push()
// 	}
// 	subscribeToScanList(): Observable<ScanList[]>{
// 		return this.scanListRx.asObservable();
// 	}
// 	broadcastState(state: string){
// 		let message: Message = {
// 					state: state,
// 					type: "scan"
// 				}

// 		this.messageSvc.changeMessage(message);
// 		// switch(state){
// 		// 	case "complete": case "failed": 
// 		// 		type = "scan-result";
// 		// 		break;
// 		// 	default:
// 		// 		type = "scan-initiated";
// 		// 		break; 
// 		// }
		
// 	}
// 	//need to clean all this crap up
// 	requestScan(bandSelections: Array<any>, ratSelections: Array<any>){
// 		//TODO: this should be a state returned by the server
// 		this.broadcastState('initiated');

// 		let filteredIds = this.filterIdsByTwoProperties(
// 			this._formatSelections(bandSelections, ratSelections));

// 		let fakeScanResults = [];
// 		for(let i=0;i<filteredIds.length;i++){
// 			let cell = this.getCellById(filteredIds[i]);
// 			if(cell){
// 				fakeScanResults.push(this.getCellById(filteredIds[i]));
// 			}
// 		}
// 		console.log("fake scan ", fakeScanResults);
// 		this.filteredFakeScan = fakeScanResults;
// 		this._requestScan();
// 	}
// 	_formatSelections(bandSelections: Array<any>, ratSelections: Array<any>){
// 		let propertiesObj = {"band": [], "rat": []}
// 		for(let rat in ratSelections){
// 			if(ratSelections[rat].available && ratSelections[rat].selected){
// 				propertiesObj.rat.push(ratSelections[rat].rat)
// 			}
// 		}
// 		for(let band in bandSelections){
// 			if(bandSelections[band].available && bandSelections[band].selected){
// 				propertiesObj.band.push(bandSelections[band].band)
// 			}
// 		}
// 		return propertiesObj;
// 	}

// 	// _postBullshitResults(fakeScanResults, scanListRx, broadCastState, state){
// 	public _postBullshitResults(){
// 		if(this.filteredFakeScan.length){
// 			this.scanListRx.next(this.filteredFakeScan);
// 			this.broadcastState('completed');
// 		}
// 		// if(fakeScanResults.length){
// 		// 	scanListRx.next(fakeScanResults);
// 		// 	broadCastState(state);
// 		// }
// 	}
// 	_requestScan(){
// 		// var that = this;
// 		// setTimeout(this._postBullshitResults, 4000, this.filteredFakeScan, this.scanListRx, this.broadcastState, 'completed');
// 		// setTimeout(this._postBullshitResults, 4000, that);
// 		setTimeout(()=>{    //<<<---    using ()=> syntax
// 		      this._postBullshitResults();
// 		 }, 3000);

// 		// setTimeout(() => {
// 		//     scanListRx.next(4);
// 		//     observer.complete();
// 		//   }, 1000);

// 		//this should be done when a scan result returns not here
// 		// this._constructIndex();
// 		//
		

// 		// this.filterIdsByTwoProperties({'band': ['1800', '900'], 'rat': ['GSM', 'UMTS']});
// 		// console.log('getcellbyID: ', this.getCellById('2'));
// 	};

	_setMockCellList(){
		this.fakeCellList = [
		{
			"id":"1",
			"operator":"Pelephone",
			"rat":"UMTS",
			"band":"1800",
			"cellid":"707",
			"mcc":"425",
			"mnc":"3",
			"arfcn":"10201",
			"lac":"1400",
			"keepLac":"0",
			"workMode":"release",
			"btsId":"1",
			"gain":"20",
			"smsBroadcast":"0"
		},
		{
			"id":"2",
			"operator":"Orange",
			"rat":"LTE",
			"band":"1400",
			"cellid":"125",
			"mcc":"425",
			"mnc":"3",
			"arfcn":"2105",
			"lac":"2350",
			"keepLac":"0",
			"workMode":"release",
			"btsId":"1",
			"gain":"20",
			"smsBroadcast":"0"
		},
		{
			"id":"3",
			"operator":"Pelephone",
			"rat":"LTE",
			"band":"2100",
			"cellid":"250",
			"mcc":"425",
			"mnc":"3",
			"arfcn":"9560",
			"lac":"1255",
			"keepLac":"0",
			"workMode":"release",
			"btsId":"1",
			"gain":"20",
			"smsBroadcast":"0"
		},
		{
			"id":"4",
			"operator":"Pelephone",
			"rat":"LTE",
			"band":"2400",
			"cellid":"733",
			"mcc":"425",
			"mnc":"3",
			"arfcn":"45820",
			"lac":"900",
			"keepLac":"0",
			"workMode":"release",
			"btsId":"1",
			"gain":"20",
			"smsBroadcast":"0"
		},
		{
			"id":"5",
			"operator":"Orange",
			"rat":"UMTS",
			"band":"900",
			"cellid":"205",
			"mcc":"425",
			"mnc":"3",
			"arfcn":"10738",
			"lac":"1100",
			"keepLac":"0",
			"workMode":"release",
			"btsId":"1",
			"gain":"20",
			"smsBroadcast":"0"
		},
		{
			"id":"6",
			"operator":"Pelephone",
			"rat":"UMTS",
			"band":"900",
			"cellid":"142",
			"mcc":"425",
			"mnc":"3",
			"arfcn":"10738",
			"lac":"1355",
			"keepLac":"0",
			"workMode":"release",
			"btsId":"1",
			"gain":"20",
			"smsBroadcast":"0"
		},
		{
			"id":"7",
			"operator":"Pelephone",
			"rat":"GSM",
			"band":"900",
			"cellid":"102",
			"mcc":"425",
			"mnc":"3",
			"arfcn":"10738",
			"lac":"5621",
			"keepLac":"0",
			"workMode":"release",
			"btsId":"1",
			"gain":"20",
			"smsBroadcast":"0"
		},
		{
			"id":"8",
			"operator":"Celltell",
			"rat":"UMTS",
			"band":"1800",
			"cellid":"467",
			"mcc":"425",
			"mnc":"3",
			"arfcn":"10254",
			"lac":"2350",
			"keepLac":"0",
			"workMode":"release",
			"btsId":"1",
			"gain":"20",
			"smsBroadcast":"0"
		}
		];
	}
}
