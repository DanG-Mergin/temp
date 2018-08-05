import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';

import { OperatePageRoutingModule } from "./operate-page-routing.module";
import { OperatePageComponent } from './operate-page.component';
import { EmulateModule } from '../emulate/emulate.module';
import { UiSwitchModule } from 'ngx-ui-switch';



@NgModule({
	imports: [
		CommonModule,
		EmulateModule,
		OperatePageRoutingModule,
		UiSwitchModule
	],
	declarations: [
		OperatePageComponent
	]
})
export class OperateModule { }



