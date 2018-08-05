import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';


import { EnclosuresRoutingModule } from "./enclosures-routing.module";
import { EnclosuresComponent } from './enclosures.component';
import { EnclosureDetailComponent } from './enclosure-detail/enclosure-detail.component';

import { ArchwizardModule } from 'angular-archwizard';
import { EnclosureWizardComponent } from './enclosure-wizard/enclosure-wizard.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

​
@NgModule({
    imports: [
        ArchwizardModule,
        CommonModule,
        EnclosuresRoutingModule,

        NgxDatatableModule,
        FormsModule   
    ],
    declarations: [       
        EnclosuresComponent,
        EnclosureDetailComponent,
        EnclosureWizardComponent
    ]
})
export class EnclosuresModule { }
