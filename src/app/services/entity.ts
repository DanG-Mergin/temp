export interface Entity {
	'id':number;
	'name'?:string;
	'type'?:string;
	'make'?:string;
	'model'?:string;
	'mfcSerial'?:string;
	'picSixSerial'?:string;
	'lon'?:number;
	'lat'?:number;
}

export interface Sbc {
	'id':number;
	'entityId'?:number;
	'make'?:string;
	'model'?:string;
	'mfcSerial'?:string;
	'picSixSerial'?:string;
	'operatingSys'?:string;
	'license'?:string;
	'simCard'?:string;
	'imsi'?:string;
	'buildInstall'?:string;
	'ip'?:string;
}

export interface Sdr {
	'id':string;
	'type'?:string;
	'ip'?:string;
	'sbcId'?:number;
	'make'?:string;
	'model'?:string;
	'mfcSerial'?:string;
	'picSixSerial'?:string;
}

export interface Bts {
	'id':number;
	'name'?:string;
	'type'?:string;
	'twoGsupport'?:boolean;
	'threeGsupport'?:boolean;
	'fourGsupport'?:boolean;
	'port'?:number;
	'maxPower'?:number;
	'sdrId'?:number;
	'rfChainId'?:number;
}

export interface Multiplexer {
	'id':number;
	'btsList'?:string;
	'loss'?:number;
	'rfList'?:string;
	'entityId'?:number;
}

export interface RfController {
	'id':number;
	'make'?:string;
	'model'?:string;
	'type'?:string;
	'mfcSerial'?:string;
	'picSixSerial'?:string;
	'operatingSys'?:string;
	'alc'?:boolean;
	'alcLevel'?:number;
	'license'?:string;
	'ip'?:string;
	'port'?:number;
	'entityId'?:number;
	'sbcId'?:number;
}

export interface RfChain {
	'id':number;
	'type'?:string;
	'make'?:string;
	'model'?:string;
	'mfcSerial'?:string;
	'picSixSerial'?:string;
	'band'?:number;
	'gain'?:number;
	'entityId'?:number;
	'rfControllerId'?:number;
}

export function createEntity(id:number, name?:string, type?:string, make?:string, model?:string, 
	mfcSerial?:string, picSixSerial?:string, lon?:number, lat?:number){
	return{
		'id': id,
		'name': name,
		'type': type,
		'make': make,
		'model': model,
		'mfcSerial': mfcSerial,
		'picSixSerial': picSixSerial,
		'lon': lon,
		'lat': lat
	}
}

export function createSbc(id:number, entityId?:number, make?:string, model?:string, mfcSerial?:string, 
	picSixSerial?:string, operatingSys?:string, license?:string, simCard?:string, 
	imsi?:string, buildInstall?:string, ip?:string){
	return{
		'id': id,
		'entityId': entityId,
		'make': make,
		'model': model,
		'mfcSerial': mfcSerial,
		'picSixSerial': picSixSerial,
		'operatingSys': operatingSys,
		'license': license,
		'simCard': simCard,
		'imsi': imsi,
		'buildInstall': buildInstall,
		'ip': ip
	}
}

export function createSdr(id:string, type?:string, ip?:string, sbcId?:number, make?:string, 
	model?:string, mfcSerial?:string, picSixSerial?:string){
	return{
		'id': id,
		'type': type,
		'ip': ip,
		'sbcId': sbcId,
		'make': make,
		'model': model,
		'mfcSerial': mfcSerial,
		'picSixSerial': picSixSerial
	}
}

export function createBts(id:number, name?:string, type?:string, twoGsupport?:boolean, threeGsupport?:boolean, 
	fourGsupport?:boolean, port?:number, maxPower?:number, sdrId?:number, 
	rfChainId?:number){
	return{
		'id': id,
		'name': name,
		'type': type,
		'twoGsupport': twoGsupport,
		'threeGsupport': threeGsupport,
		'fourGsupport': fourGsupport,
		'port': port,
		'maxPower': maxPower,
		'sdrId': sdrId,
		'rfChainId': rfChainId
	}
}

export function createMultiplexer(id:number, btsList?:string, loss?:number, rfList?:string, entityId?:number){
	return{

		'id': id,
		'btsList': btsList,
		'loss': loss,
		'rfList': rfList,
		'entityId': entityId
	}
}

export function createRfController(id:number, make?:string, model?:string, type?:string, mfcSerial?:string, 
	picSixSerial?:string, operatingSys?:string, alc?:boolean, alcLevel?:number, 
	license?:string, ip?:string, port?:number, entityId?:number, sbcId?:number){
	return{
		'id': id,
		'make': make,
		'model': model,
		'type': type,
		'mfcSerial': mfcSerial,
		'picSixSerial': picSixSerial,
		'operatingSys': operatingSys,
		'alc': alc,
		'alcLevel': alcLevel,
		'license': license,
		'ip': ip,
		'port': port,
		'entityId': entityId,
		'sbcId': sbcId
	}
}

export function createRfChain(id:number, type?:string, make?:string, model?:string, mfcSerial?:string, 
	picSixSerial?:string, band?:number, gain?:number, entityId?:number, 
	rfControllerId?:number){
	return{
		'id': id,
		'type': type,
		'make': make,
		'model': model,
		'mfcSerial': mfcSerial,
		'picSixSerial': picSixSerial,
		'band': band,
		'gain': gain,
		'entityId': entityId,
		'rfControllerId': rfControllerId
	}
}

