import { Component, OnInit, Input } from '@angular/core';
import { Enclosure } from '../../../services/enclosure'

@Component({
  selector: 'app-enclosure-detail',
  templateUrl: './enclosure-detail.component.html',
  styleUrls: ['./enclosure-detail.component.scss']
})
export class EnclosureDetailComponent implements OnInit {
	@Input() enclosure: Enclosure;

	constructor() { }

	ngOnInit() {
		console.log(this.enclosure);
	}

}
