import { Component, OnInit } from '@angular/core';

import { Enclosure, createEnclosure } from '../../services/enclosure';
import { EnclosureService } from '../../services/enclosure.service';

@Component({
	selector: 'enclosures-page',
	templateUrl: './enclosures.component.html',
	styleUrls: ['./enclosures.component.scss']
})
export class EnclosuresComponent implements OnInit {
	selected = [];
	rows: Enclosure[];
	newEnclosure: Enclosure;

	constructor(private enclosureService: EnclosureService) {

		// this.fetch((data) => {
		// 	this.enclosures = data;
		// });
		console.log(this.getEnclosures());
	}
	ngOnInit() {
		this.getNewEnclosure();
		// this.newEnclosure = this.newEnclosure = createEnclosure();
	}

	getEnclosures() {
		this.enclosureService.getEnclosures().subscribe(enclosures => this.rows = enclosures);
		//this.enclosureService.getEnclosures().subscribe(function(enclosures) {console.log(enclosures)});
	}

	getNewEnclosure() {
		this.newEnclosure = createEnclosure();
	}
	//TODO: replace this with a service call  
	// fetch(cb) {
	// 	const req = new XMLHttpRequest();
	// 	req.open('GET', `assets/data/mock-enclosures.json`);

	// 	req.onload = () => {
	// 		cb(JSON.parse(req.response));
	// 	};

	// 	req.send();
	// }

	onSelect({ selected }) {
		console.log('Select Event', selected, this.selected);

		this.selected.splice(0, this.selected.length);
		this.selected.push(...selected);
	}

	onActivate(event) {
		console.log('Activate Event', event);
	}

	detail(row: any) {
		console.log(row);
        //this.router.navigateByUrl('/details/' + row.id);
    }
}
