import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NouisliderModule } from 'ng2-nouislider/src/nouislider';

import { FormsModule } from '@angular/forms';


import { EmulateComponent } from './emulate.component';
import { EmulateDetailComponent } from './emulate-detail/emulate-detail.component';

import { FakeCellsService } from '../../services/fake-cells.service';
import { InterceptService } from '../../services/intercept.service';

import { UiSwitchModule } from 'ngx-ui-switch';
import { TransmitSelectedComponent } from './transmit-selected/transmit-selected.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgbModule,
		NgxDatatableModule,
		NouisliderModule,
		UiSwitchModule,
	],
	declarations: [
		EmulateComponent,
		EmulateDetailComponent,
		TransmitSelectedComponent
	],
	exports: [
		EmulateComponent,
		EmulateDetailComponent
	],
	providers: [FakeCellsService, InterceptService],
})
export class EmulateModule { }



