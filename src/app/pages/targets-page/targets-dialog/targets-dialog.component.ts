import { Component, OnInit, Input } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Target, createTarget } from '../../../services/target';
import { TargetService } from '../../../services/targets.service';


@Component({
  selector: 'app-targets-dialog',
  templateUrl: './targets-dialog.component.html',
  styleUrls: ['./targets-dialog.component.scss']
})
export class TargetsDialogComponent implements OnInit {
	private targets: Target[];
	targetForm: FormGroup;
	

	constructor(private targetService: TargetService, 
		public activeModal: NgbActiveModal,
		private formBuilder: FormBuilder) { 

		this.targets = [createTarget()];
		console.log(this.targets);
		this.createForm();
	}

	ngOnInit() {
		this.targetService.getAllSelectedTargets().subscribe(targets => {
			this.targetForm.patchValue(targets[0]);
		});
	}

	private createForm() {
		this.targetForm = this.formBuilder.group({
			name: '',
			imsi: '',
			tmsi: '', 
			cellNumber: '',
			btsId: '',
			time: '',
			operator: '',
			arfcn: '',
			btsName: 'BTS 1'
		});
	}
	private addTarget() {
		this.activeModal.close(this.targetForm.value);
	}

}
