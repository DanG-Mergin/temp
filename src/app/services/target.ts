export interface Target {
	'name'?:string;
	'id'?:number;
	'type'?:string;
	'imsi'?:string;
	'imei'?:string;
	'tmsi'?:string;
	'lastTMSI'?:string;
	'btsId'?:number;
	'btsName'?:string;
	'time'?:string;
	'operator'?:string;
	'arfcn'?:string;
	'addressList'?:string;
	'socialList'?:string;
	'phoneList'?:string;
	'notesList'?:string;
}

export interface TargetPhones {
	'cellNumber'?:string;
	'id'?:number;
	'phoneId'?:number;
}

export interface Address {
	'id'?:number;
	'city'?:string;
	'country'?:string;
	'streetAddress'?:string;
	'postalCode'?:string;
}

export interface Social {
	'id'?:number;
	'type'?:string;
	'socialText'?:string;
}

export interface Notes {
	'id'?:number;
	'note'?:string;
	'title'?:string;
	'author'?:string;
	'dateTime'?:string;
}

export function createTarget(name?:string, id?:number, type?:string, imsi?:string, imei?:string, 
	tmsi?:string, lastTMSI?:string, btsId?:number, btsName?:string, 
	time?:string, operator?:string, arfcn?:string, addressList?:string, socialList?:string, phoneList?:string, notesList?:string){
	return{
		'name': name,
		'id': id,
		'type': type,
		'imsi': imsi,
		'imei': imei,
		'tmsi': tmsi,
		'lastTMSI': lastTMSI,
		'btsId': btsId,
		'btsName': btsName,
		'time': time,
		'operator': operator,
		'arfcn': arfcn,
		'addressList': addressList,
		'socialList': socialList,
		'phoneList': phoneList,
		'notesList': notesList
	}
}

export function createTargetPhones(cellNumber?:string, id?:number, phoneId?:number){
	return{
		'cellNumber': cellNumber,
		'id': id,
		'phoneId': phoneId
	}
}

export function createAddress(id?:number, city?:string, country?:string, streetAddress?:string, postalCode?:string){
	return{
		'id': id,
		'city': city,
		'country': country,
		'streetAddress': streetAddress,
		'postalCode': postalCode
	}
}

export function createSocial(id?:number, type?:string, socialText?:string){
	return{
		'id': id,
		'type': type,
		'socialText': socialText
	}
}

export function createNotes(id?:number, note?:string, title?:string, author?:string, dateTime?:string){
	return{

		'id': id,
		'note': note,
		'title': title,
		'author': author,
		'dateTime': dateTime
	}
}

