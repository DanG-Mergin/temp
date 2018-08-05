export class BTS {
	"operator": Operator;
	"band": string;
	"channel": string;
	"rxLevel": number;
	"lac": string;
	"cellID": string;
	"bsic": string;
	"neighbors": string[]; //TODO: can we store references to objects here? 5-23
	"power": number;
}

export class Operator {
	"name": string;
	"country": string;
	"mcc": string;
	"mnc": string;
}


