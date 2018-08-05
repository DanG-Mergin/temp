export interface GuiFakeCell {
	'id':string;
	'cellId':string;
	'mcc':string;
	'mnc':string;
	'arfcn':string;
	'lac':string;
	'keepLac':boolean;
	'operator':string;
	'rat':string;
	'band':string;
	'workMode':string;
	'btsId':string;
	'gain':string;
	'smsBroadcast':boolean;
}

export function createGuiFakeCell(id:string, cellId:string, mcc:string, mnc:string, arfcn:string, 
	lac:string, keepLac:boolean, operator:string, rat:string, 
	band:string, workMode:string, btsId:string, gain:string, smsBroadcast:boolean){
	return{
		'id': id,
		'cellId': cellId,
		'mcc': mcc,
		'mnc': mnc,
		'arfcn': arfcn,
		'lac': lac,
		'keepLac': keepLac,
		'operator': operator,
		'rat': rat,
		'band': band,
		'workMode': workMode,
		'btsId': btsId,
		'gain': gain,
		'smsBroadcast': smsBroadcast
	}
}

