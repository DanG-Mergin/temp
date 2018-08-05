import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TargetsPageRoutingModule } from "./targets-page-routing.module";
import { TargetsListComponent } from './targets-list/targets-list.component';
import { TargetsPageComponent } from './targets-page.component';
import { TargetsDialogComponent } from './targets-dialog/targets-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    TargetsPageRoutingModule,
    NgbModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TargetsListComponent, TargetsPageComponent, TargetsDialogComponent],
  bootstrap: [TargetsDialogComponent]
})
export class TargetsModule { }



