export interface Message {
	'type':string;
	'state': string;
	'id'?:string;
	'data'?:object;
	'text'?:string;

}
export function createMessage(type:string, state: string, id?:string, data?:object, text?:string){
	return{
		'type': type,
		'state': state,
		'id': id,
		'data': data,
		'text': text
	}
}
//TODO: implement constructors

/*

	{
      
      "type": "scan", "default"
      "state": "completed, initiated, failed, terminated",
      "id": "1",
      "text": "Scan Successful", "Scan Initiated",
      "data": {}
    }

*/