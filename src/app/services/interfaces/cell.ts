export interface Cell {
	'id'?:number;
	'cellId'?:string;
	'mcc'?:string;
	'mnc'?:string;
	'bcc'?:number;
	'ncc'?:number;
	'rac'?:number;
	'snr'?:number;
	'rssi'?:number;
	'pci'?:number;
	'pcs'?:number;
	'arfcn'?:number;
	'lac'?:number;
	'bsic'?:number;
	'rat'?:string;
	'band'?:string;
	'comment'?:string;
	'btsId'?:number;
	'quality'?:number;
	'txLevel'?:string;
	'neigborList'?:string;
	'operator'?:string;
	'cro'?:number;
	'c1'?:number;
	'c2'?:number;
	't3212'?:number;
	'psc'?:number;
	'rscp'?:number;
	'rsrq'?:number;
	'rsrp'?:number;
	'nmo'?:number;
	'dlbw'?:number;
	'tempOffset'?:number;
	'penaltyTime'?:number;
	'msTxPwrMaxCcch'?:number;
	'rxLevAccMin'?:number;
	'numTxAttnPorts'?:number;
	'scanId'?:number;
	'cellLevel'?:number;
	'levelSelect'?:number;
	'pichDuration'?:number;
	'pichResource'?:number;
}

export function createCell(id?:number, cellId?:string, mcc?:string, mnc?:string, bcc?:number, 
	ncc?:number, rac?:number, snr?:number, rssi?:number, 
	pci?:number, pcs?:number, arfcn?:number, lac?:number, bsic?:number, rat?:string, band?:string, comment?:string, btsId?:number, quality?:number, txLevel?:string, neigborList?:string, operator?:string, cro?:number, c1?:number, c2?:number, t3212?:number, psc?:number, rscp?:number, rsrq?:number, rsrp?:number, nmo?:number, dlbw?:number, tempOffset?:number, penaltyTime?:number, msTxPwrMaxCcch?:number, rxLevAccMin?:number, numTxAttnPorts?:number, scanId?:number, cellLevel?:number, levelSelect?:number, pichDuration?:number, pichResource?:number){
	return{
		'id': id,
		'cellId': cellId,
		'mcc': mcc,
		'mnc': mnc,
		'bcc': bcc,
		'ncc': ncc,
		'rac': rac,
		'snr': snr,
		'rssi': rssi,
		'pci': pci,
		'pcs': pcs,
		'arfcn': arfcn,
		'lac': lac,
		'bsic': bsic,
		'rat': rat,
		'band': band,
		'comment': comment,
		'btsId': btsId,
		'quality': quality,
		'txLevel': txLevel,
		'neigborList': neigborList,
		'operator': operator,
		'cro': cro,
		'c1': c1,
		'c2': c2,
		't3212': t3212,
		'psc': psc,
		'rscp': rscp,
		'rsrq': rsrq,
		'rsrp': rsrp,
		'nmo': nmo,
		'dlbw': dlbw,
		'tempOffset': tempOffset,
		'penaltyTime': penaltyTime,
		'msTxPwrMaxCcch': msTxPwrMaxCcch,
		'rxLevAccMin': rxLevAccMin,
		'numTxAttnPorts': numTxAttnPorts,
		'scanId': scanId,
		'cellLevel': cellLevel,
		'levelSelect': levelSelect,
		'pichDuration': pichDuration,
		'pichResource': pichResource
	}
}







