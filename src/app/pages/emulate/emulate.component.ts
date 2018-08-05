import { Component, OnInit, OnDestroy } from '@angular/core';

import { GuiFakeCell } from '../../services/interfaces/fake-cell';
import { ScanService } from '../../services/scan.service';

import { MessageService } from '../../services/message.service';
import { Message } from '../../services/interfaces/system-message';

import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-emulate',
    templateUrl: './emulate.component.html',
    styleUrls: ['./emulate.component.scss']
})
export class EmulateComponent implements OnInit, OnDestroy {
    fakeCells: GuiFakeCell[] = [];
    allTransmitting: boolean = false;
    showMe: boolean = false;
    txAllText: string = "Transmit All";

    //TODO: clean this shit up
    numBTS: number =  0;

    constructor(private scanService: ScanService, 
        private messageSvc: MessageService) { }

    ngOnInit() {
        this.messageSvc.currentMessage.subscribe(message => {
            this._messageRecieved(message);
            console.log(message);
        });
        console.log("hi");
        this.scanService.subscribeToAutoRecs().subscribe(fakeCells => {
            console.log(fakeCells);
            
            if(this.fakeCells.length > 0 && this.numBTS <= fakeCells.length){
                this.fakeCells = this.fakeCells;
                this.numBTS = this.fakeCells.length;
            }
        });
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
        if(message.type === 'auto-config-lies' && !this.showMe){
            if(!this.showMe){this.setFakeCells();};
            this.showMe = true;
        }
        if(message.type === "transmit"){
            switch(message['state']){
                case "initiated":
                if(!this.allTransmitting){
                    this.checkIfAllTx();
                }
                break; 
                case "completed": 
                break;
                case "failed": 
                    //TODO: add logic for determining if we're transmitting.  
                    //likely an update through the intercept pipe, or ids in the 
                    //message itself
                    break;
                }
            }
        }
    //TODO: toggle the switch if all are transmitting
    checkIfAllTx(){

    }
    newMessage(state: string, type: string) {
        let message: Message = {
            state: state,
            type: type
        }

        this.messageSvc.changeMessage(message);
    }
    ngOnDestroy(){

    }
    setFakeCells(){
        this.fakeCells = [{
      "id":"1",
      "operator":"Pelephone",
      "rat":"UMTS",
      "band":"1800",
      "cellId":"707",
      "mcc":"425",
      "mnc":"3",
      "arfcn":"10201",
      "lac":"1400",
      "keepLac":false,
      "workMode":"release",
      "btsId":"1",
      "gain":"20",
      "smsBroadcast":false
    },
    {
      "id":"2",
      "operator":"Orange",
      "rat":"LTE",
      "band":"1400",
      "cellId":"125",
      "mcc":"425",
      "mnc":"3",
      "arfcn":"2105",
      "lac":"2350",
      "keepLac":false,
      "workMode":"release",
      "btsId":"2",
      "gain":"20",
      "smsBroadcast":false
    },
    {
      "id":"3",
      "operator":"Pelephone",
      "rat":"LTE",
      "band":"2100",
      "cellId":"250",
      "mcc":"425",
      "mnc":"3",
      "arfcn":"9560",
      "lac":"1255",
      "keepLac":false,
      "workMode":"release",
      "btsId":"3",
      "gain":"20",
      "smsBroadcast":false
    },
    {
      "id":"4",
      "operator":"Pelephone",
      "rat":"LTE",
      "band":"2400",
      "cellId":"733",
      "mcc":"425",
      "mnc":"3",
      "arfcn":"45820",
      "lac":"900",
      "keepLac":false,
      "workMode":"release",
      "btsId":"4",
      "gain":"20",
      "smsBroadcast":false
    }];
    }
}

// this.fakeCells = [{
//       "id":"1",
//       "operator":"Pelephone",
//       "rat":"UMTS",
//       "band":"1800",
//       "cellId":"707",
//       "mcc":"425",
//       "mnc":"3",
//       "arfcn":"10201",
//       "lac":"1400",
//       "keepLac":false,
//       "workMode":"release",
//       "btsId":"1",
//       "gain":"20",
//       "smsBroadcast":false
//     },
//     {
//       "id":"2",
//       "operator":"Orange",
//       "rat":"LTE",
//       "band":"1400",
//       "cellId":"125",
//       "mcc":"425",
//       "mnc":"3",
//       "arfcn":"2105",
//       "lac":"2350",
//       "keepLac":false,
//       "workMode":"release",
//       "btsId":"2",
//       "gain":"20",
//       "smsBroadcast":false
//     },
//     {
//       "id":"3",
//       "operator":"Pelephone",
//       "rat":"LTE",
//       "band":"2100",
//       "cellId":"250",
//       "mcc":"425",
//       "mnc":"3",
//       "arfcn":"9560",
//       "lac":"1255",
//       "keepLac":false,
//       "workMode":"release",
//       "btsId":"3",
//       "gain":"20",
//       "smsBroadcast":false
//     },
//     {
//       "id":"4",
//       "operator":"Pelephone",
//       "rat":"LTE",
//       "band":"2400",
//       "cellId":"733",
//       "mcc":"425",
//       "mnc":"3",
//       "arfcn":"45820",
//       "lac":"900",
//       "keepLac":false,
//       "workMode":"release",
//       "btsId":"4",
//       "gain":"20",
//       "smsBroadcast":false
//     }];

// import { Component, OnInit, OnDestroy } from '@angular/core';

// import { GuiFakeCell } from '../../services/interfaces/fake-cell';
// import { ScanService } from '../../services/scan.service';

// import { MessageService } from '../../services/message.service';
// import { Message } from '../../services/interfaces/system-message';

// import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';


// @Component({
//     selector: 'app-emulate',
//     templateUrl: './emulate.component.html',
//     styleUrls: ['./emulate.component.scss']
// })
// export class EmulateComponent implements OnInit {
//     fakeCells: GuiFakeCell[] = [];


//     constructor(private scanService: ScanService, 
//         private messageSvc: MessageService) { }

//     ngOnInit() {
//         console.log("hi");
//     }

//     transmitAllToggled(){
//         this.newMessage('transmit-all', 'initiated');
//     }
//     newMessage(state: string, type: string) {
//         let message: Message = {
//             state: state,
//             type: type
//         }

//         this.messageSvc.changeMessage(message);
//     }
//     ngOnDestroy(){

//     }
// }



