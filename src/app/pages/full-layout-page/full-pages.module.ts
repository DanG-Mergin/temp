import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ArchwizardModule } from 'angular-archwizard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { FullPagesRoutingModule } from "./full-pages-routing.module";

import { FullLayoutPageComponent } from './full-layout-page.component';

import { ScanComponent } from './scan/scan-list/scan-list.component';
import { ScanSelectComponent } from './scan/scan-select/scan-select.component';
import { EmulateModule } from '../emulate/emulate.module';

import { MapsModule } from './maps/maps.module';
import { ScanService } from '../../services/scan.service';

@NgModule({
    imports: [
        ArchwizardModule,
        CommonModule,
        EmulateModule, 
        FullPagesRoutingModule,
        NgxDatatableModule,
        FormsModule,
        MapsModule,
        NgbModule.forRoot()
    ],
    declarations: [       
        FullLayoutPageComponent,
        ScanComponent,
        // EmulateComponent,
        // EmulateDetailComponent,
        ScanSelectComponent
    ],
    providers: [ScanService]
})
export class FullPagesModule { }
