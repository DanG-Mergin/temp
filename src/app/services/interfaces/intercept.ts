export interface Phone {
	id:number;
	btsId?:number;
	tmsi?:string;
	imsi?:string;
	imei?:string;
	msisdn?:string;
	distance?:number;
	listType?:string;
	rat?:string;
	plmn?:number;
	snr?:number;
	runId?:number;
	country?:string;
	dlChannelizationCode?:number;
	initailRscpVal?:number;
	initailRttVal?:number;
	propagationDelay?:number;
	ulScramblingCode?:number;
	classmark2?:number;
	rssi?:number;
	ta?:number;
	ip?:string;
}

export function createPhone(id:number, btsId?:number, tmsi?:string, imsi?:string, imei?:string, 
	msisdn?:string, distance?:number, listType?:string, rat?:string, 
	plmn?:number, snr?:number, runId?:number, country?:string, dlChannelizationCode?:number, initailRscpVal?:number, initailRttVal?:number, propagationDelay?:number, ulScramblingCode?:number, classmark2?:number, rssi?:number, ta?:number, ip?:string){
	return{
		id: id,
		btsId: btsId,
		tmsi: tmsi,
		imsi: imsi,
		imei: imei,
		msisdn: msisdn,
		distance: distance,
		listType: listType,
		rat: rat,
		plmn: plmn,
		snr: snr,
		runId: runId,
		country: country,
		dlChannelizationCode: dlChannelizationCode,
		initailRscpVal: initailRscpVal,
		initailRttVal: initailRttVal,
		propagationDelay: propagationDelay,
		ulScramblingCode: ulScramblingCode,
		classmark2: classmark2,
		rssi: rssi,
		ta: ta,
		ip: ip
	}
}

