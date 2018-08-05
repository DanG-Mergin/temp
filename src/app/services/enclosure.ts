export interface Enclosure {
	"id": string;
	"type": string;
    "name": string;
    "ip": string;
    "status": boolean;
    "lastUpdated": string;
    "sbc": SBC;
    "sdr": SDR;
    "rfChains": rfChain[];
}

export interface SBC {
	"type": string;
	"vendorSerial": string; 
	"ip": string;
	"simNumber": number;
	"hasController": boolean;
}
export interface SDR {
	"type": string;
	"vendorSerial": string; 
	"ip": string;
	"BTS": Array<localBTS>;
	"port": string;
	"protocols": protocolsObj; 
	"swVersion": string;
	"build": string;
}

export interface rfChain {
	"amp": Amplifier;
	"freqBands": Array<freqBand>; 
	"type": string;
}
export interface freqBand {
	"gainLow": string;
	"gainHigh": string;
	"txAttentive": string;
	"band": string;
}

export interface Amplifier {
	"ip": string; 
	"make": string;
	"model": string;
	"mfcSerial": string;
	"picSixSerial": string; 
}

export interface localBTS {
	"ip": string;
	"port": string;
}
export interface protocolsObj {
	"twoG": boolean,
	"threeG": boolean,
	"fourG": boolean
}
export function createLocalBTS(ip?: string, port?: string){
	return {
		"ip": ip,
		"port": port
	}
}

export function createEnclosure(id?: string, type?: string, name?: string, ip?: string,
    status?: boolean, lastUpdated?: string, sbc?: SBC, sdr?: SDR,
    rfChains?: rfChain[]){
	return {
		id: id,
		type: type,
		name: name,
	    ip: ip,
	    status: status,
	    lastUpdated: lastUpdated,
	    sbc: createSBC(),
	    sdr: createSDR(),
	    rfChains: [createRfChain()] 
	}
}

export function createSBC(type?: string, vendorSerial?: string, ip?: string,
	simNumber?: number, memorySize?: number, storageSize?: number, hasController?: boolean) {
	return {
		type: type,
		vendorSerial: vendorSerial,
		ip: ip,
		simNumber: simNumber,
		hasController: hasController || false
	}
}

export function createSDR(type?: string, vendorSerial?: string, 
	ip?: string, BTS?: Array<localBTS>, port?: string,
	protocols?: protocolsObj, swVersion?: string, build?: string){
	return {
		type: type, 
		vendorSerial: vendorSerial, 
		ip: ip, 
		BTS: [createLocalBTS()],
		port: port,
		protocols: createProtocolObj(),
		// protocols: {"twoG": false, "threeG": false, "fourG": false},
		swVersion: swVersion,
		build: build	
	}
}
export function createProtocolObj(twoG?: boolean, threeG?: boolean, fourG?: boolean){
	return {
		twoG: false,
		threeG: false,
		fourG: false
	}
}

export function createRfChain(type?: string, freqBands?:Array<freqBand>, 
	amp?: Amplifier){
	return {
		type: type || 'Shared',
		freqBands: [createFreqBand()], 
		
		amp: createAmplifier()
	}
}
export function createFreqBand(gainLow?: string, gainHigh?: string, txAttentive?: string, band?: string){
	return {
		gainLow: gainLow,
		gainHigh: gainHigh,
		txAttentive: txAttentive,
		band: band
	}
}
export function createAmplifier(ip?: string, make?: string, model?: string, 
	mfcSerial?: string, picSixSerial?: string){
	return {
		ip: ip, 
		make: make,
		model: model,
		mfcSerial: mfcSerial,
		picSixSerial: picSixSerial 
	}
}


