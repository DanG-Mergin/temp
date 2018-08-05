
import { Phone } from './interfaces/intercept';
import { GuiFakeCell } from './interfaces/fake-cell';

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators'; 
import 'rxjs/add/operator/map'; 
import { Socket } from 'ng-socket-io';

@Injectable()
export class InterceptService {
  //private phones = []; 

  phones = new BehaviorSubject<Phone[]>([]);
  //observable bts selections stream
  currentPhones = this.phones.asObservable();

  constructor(private socket: Socket) { }

  getFakePhones(selections: Array<GuiFakeCell>){
//Array.from(new Set(allMatchingIds));
         //    console.log(selections);
         // let selectedBnRs = selections.map((btsSettings) => {
         //     return [[btsSettings.band], [btsSettings.rat]];
         // });
         // let bandSelections = selectedBnRs[0] || [],
         //     ratSelections =  selectedBnRs[0] || [];

         // console.log(selectedBnRs);

         // let rats = Array.from(new Set(ratSelections));
         // console.log("RATS are ", rats);
         //  let filteredByRat = this.fakePhones.filter(
         //      (phone)  => {
         //          return !rats.includes(phone['rat']);
         //      });
         //  let filteredByBand = filteredByRat.filter((phone) =>{
         //      return !bandSelections.includes(phone['band']);
         //  });
         //  console.log(filteredByBand); 

  }
  //TODO: make this not a flaming worthless piece of shit
  transmitSelected(selections: Array<GuiFakeCell>){
      this.getFakePhones(selections);
  }
  getPhones(): Observable<Phone[]> {
    //   this.socket.emit("PhoneDetailReq");

    //   this.socket.on("PhoneDetailAns", (data) => {
    //     //compare against interface.  TODO: add true validation and error handling
    //     let returnedPhones = data['phones'] as Phone[];
    //     this.phones.next(returnedPhones);
    // });
      return this.phones.asObservable();
  }

  addPhone(phone: Phone) {
      this.socket.emit("addPhoneReq", phone);
  }

  updatePhone(){

  }

  fakePhones = [{"id":"1",
  "imei":"350010120161224",
  "imsi":"425030003477866",
  "tmsi":"D532C046",
  "phoneId":"7",
  "rat":"UMTS",
  "band":"2100",
  "date":"7/24/2018 5:06:38 PM",
  "isTarget":"False",
  "interest":"False",
  "mcc":"425",
  "mnc":"3",
  "arfcn":"10738",
  "cellId":"707",
  "ta":"0",
  "lac":"2350",
  "rac":"0",
},{"id":"2",
"imei":"350010120161225",
"imsi":"425030003477867",
"tmsi":"D532C047",
"phoneId":"8",
"rat":"UMTS",
"band":"2101",
"date":"8/24/2018 5:06:38 PM",
"isTarget":"False",
"interest":"False",
"mcc":"426",
"mnc":"4",
"arfcn":"10739",
"cellId":"708",
"ta":"1",
"lac":"2351",
"rac":"1",
},{"id":"3",
"imei":"350010120161226",
"imsi":"425030003477868",
"tmsi":"D532C048",
"phoneId":"9",
"rat":"UMTS",
"band":"2102",
"date":"9/24/2018 5:06:38 PM",
"isTarget":"False",
"interest":"False",
"mcc":"427",
"mnc":"5",
"arfcn":"10740",
"cellId":"709",
"ta":"2",
"lac":"2352",
"rac":"2",
},{"id":"4",
"imei":"350010120161227",
"imsi":"425030003477869",
"tmsi":"D532C049",
"phoneId":"10",
"rat":"UMTS",
"band":"2103",
"date":"10/24/2018 5:06:38 PM",
"isTarget":"False",
"interest":"False",
"mcc":"428",
"mnc":"6",
"arfcn":"10741",
"cellId":"710",
"ta":"3",
"lac":"2353",
"rac":"3",
},{"id":"5",
"imei":"350010120161228",
"imsi":"425030003477870",
"tmsi":"D532C050",
"phoneId":"11",
"rat":"UMTS",
"band":"2104",
"date":"11/24/2018 5:06:38 PM",
"isTarget":"False",
"interest":"False",
"mcc":"429",
"mnc":"7",
"arfcn":"10742",
"cellId":"711",
"ta":"4",
"lac":"2354",
"rac":"4",
},{"id":"6",
"imei":"350010120161229",
"imsi":"425030003477871",
"tmsi":"D532C051",
"phoneId":"12",
"rat":"UMTS",
"band":"2105",
"date":"12/24/2018 5:06:38 PM",
"isTarget":"False",
"interest":"False",
"mcc":"430",
"mnc":"8",
"arfcn":"10743",
"cellId":"712",
"ta":"5",
"lac":"2355",
"rac":"5",
},{"id":"7",
"imei":"350010120161230",
"imsi":"425030003477872",
"tmsi":"D532C052",
"phoneId":"13",
"rat":"UMTS",
"band":"2106",
"date":"13/24/2018 5:06:38 PM",
"isTarget":"False",
"interest":"False",
"mcc":"431",
"mnc":"9",
"arfcn":"10744",
"cellId":"713",
"ta":"6",
"lac":"2356",
"rac":"6",
},{"id":"8",
"imei":"350010120161231",
"imsi":"425030003477873",
"tmsi":"D532C053",
"phoneId":"14",
"rat":"UMTS",
"band":"2107",
"date":"14/24/2018 5:06:38 PM",
"isTarget":"False",
"interest":"False",
"mcc":"432",
"mnc":"10",
"arfcn":"10745",
"cellId":"714",
"ta":"7",
"lac":"2357",
"rac":"7",
},{"id":"9",
"imei":"350010120161232",
"imsi":"425030003477874",
"tmsi":"D532C054",
"phoneId":"15",
"rat":"UMTS",
"band":"2108",
"date":"15/24/2018 5:06:38 PM",
"isTarget":"False",
"interest":"False",
"mcc":"433",
"mnc":"11",
"arfcn":"10746",
"cellId":"715",
"ta":"8",
"lac":"2358",
"rac":"8",
},{"id":"10",
"imei":"350010120161233",
"imsi":"425030003477875",
"tmsi":"D532C055",
"phoneId":"16",
"rat":"UMTS",
"band":"2109",
"date":"16/24/2018 5:06:38 PM",
"isTarget":"False",
"interest":"False",
"mcc":"434",
"mnc":"12",
"arfcn":"10747",
"cellId":"716",
"ta":"9",
"lac":"2359",
"rac":"9",
},{"id":"11",
"imei":"350010120161234",
"imsi":"425030003477876",
"tmsi":"D532C056",
"phoneId":"17",
"rat":"UMTS",
"band":"2110",
"date":"17/24/2018 5:06:38 PM",
"isTarget":"False",
"interest":"False",
"mcc":"435",
"mnc":"13",
"arfcn":"10748",
"cellId":"717",
"ta":"10",
"lac":"2360",
"rac":"10"}];


}






