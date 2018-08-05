import { Component, OnInit, Input } from '@angular/core';

import { Enclosure, rfChain, createEnclosure, createRfChain, createFreqBand, createLocalBTS } from '../../../services/enclosure'

@Component({
  selector: 'app-enclosure-wizard',
  templateUrl: './enclosure-wizard.component.html',
  styleUrls: ['./enclosure-wizard.component.scss']
})
export class EnclosureWizardComponent implements OnInit {
	@Input() newEnclosure: Enclosure;
	rfcs: Enclosure[];
	constructor() { 
		console.log(this.newEnclosure);
	} 

	ngOnInit() {
		console.log('init wizard');
		this.newEnclosure = this.newEnclosure;
		console.log(this.newEnclosure);
		// $.getScript('./assets/js/jquery.steps.min.js');
		// $.getScript('./assets/js/wizard-steps.js');
	}

	addEmptyRfChain() {
		console.log(this.newEnclosure);
		this.newEnclosure.rfChains.push(createRfChain());
	}
	addEmptyFreqBand(idx) {
		this.newEnclosure.rfChains[idx].freqBands.push(createFreqBand());
	}
	addEmptyBTS(){
		this.newEnclosure.sdr.BTS.push(createLocalBTS());
	}

	// trackByIndex(index: number, obj: any): any {
	// 	return index;
	// }

}
