import { Component, OnInit } from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { Target } from '../../../services/target';
import { TargetService } from '../../../services/targets.service';

import { TargetsDialogComponent } from '../targets-dialog/targets-dialog.component';

@Component({
  selector: 'app-targets-list',
  templateUrl: './targets-list.component.html',
  styleUrls: ['./targets-list.component.scss']
})
export class TargetsListComponent implements OnInit {
	rows: Target[];
	//rows: Array<object>;
	selected = [];

	constructor(private targetService: TargetService, private modalService: NgbModal) { 
		this.getTargets();
	}

	ngOnInit() {
	}

	getTargets() {
		this.targetService.getTargets().subscribe(targets => this.rows = targets);
	}

	onSelect({ selected }) {
		console.log('Select Event', selected, this.selected);

		this.selected.splice(0, this.selected.length);
		this.selected.push(...selected);

		this.targetService.setSelectedTarget(this.selected);

		const modalRef = this.modalService.open(TargetsDialogComponent);
	}


	onActivate(event) {
		console.log('Activate Event', event);
	}

}


// import { Component, ViewEncapsulation, Input } from '@angular/core';
// import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//     selector: 'ngbd-modal-content',
//     template: `
//     <div class="modal-header">
//       <h4 class="modal-title">Hi there!</h4>
//       <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <div class="modal-body">
//       <p>Hello, {{name}}!</p>
//     </div>
//     <div class="modal-footer">
//       <button type="button" class="btn btn-secondary btn-raised" (click)="activeModal.close('Close click')">Close</button>
//     </div>
//   `
// })

// export class NgbdModalContent {
//     @Input() name;
//     constructor(public activeModal: NgbActiveModal) { }
// }


// @Component({
//     selector: 'app-modals',
//     templateUrl: './modals.component.html',
//     styleUrls: ['./modals.component.scss'],
//     encapsulation: ViewEncapsulation.None,
// })

// export class ModalsComponent {

//     closeResult: string;

//     constructor(private modalService: NgbModal) { }

//     // Open default modal
//     open(content) {
//         this.modalService.open(content).result.then((result) => {
//             this.closeResult = `Closed with: ${result}`;
//         }, (reason) => {
//             this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//         });
//     }

//     // This function is used in open
//     private getDismissReason(reason: any): string {
//         if (reason === ModalDismissReasons.ESC) {
//             return 'by pressing ESC';
//         } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//             return 'by clicking on a backdrop';
//         } else {
//             return `with: ${reason}`;
//         }
//     }

//     // Open modal with dark section
//     openModal(customContent) {
//         this.modalService.open(customContent, { windowClass: 'dark-modal' });
//     }

//     // Open content with dark section
//     openContent() {
//         const modalRef = this.modalService.open(NgbdModalContent);
//         modalRef.componentInstance.name = 'World';
//     }
// }


