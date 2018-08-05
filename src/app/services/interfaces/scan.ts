
export interface ScanList {
	'id': string,
	'operator'?:string;
	'rat'?:string;
	'band'?:number;
	'cellId'?:number;
	'powerLvl'?:number;
}

export function createScanList(id: string, operator?:string, rat?:string, band?:number, cellId?:number, powerLvl?:number){
	return{
	'id': id,
	'operator': operator,
	'rat': rat,
	'band': band,
	'cellId': cellId,
	'powerLvl': powerLvl
	}
}