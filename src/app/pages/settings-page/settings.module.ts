import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { SettingsRoutingModule } from "./settings-routing.module";

import { DisplaySettingsComponent } from './display-settings/display-settings.component';
//TODO: move form components to their own files... when settings are finalized
// import { EntityFormComponent } from './display-settings/entity-form/entity-form.component';
// import { SdrFormComponent } from './display-settings/sdr-form/sdr-form.component';
// import { SbcFormComponent } from './display-settings/sbc-form/sbc-form.component';
// import { ControllerFormComponent } from './display-settings/controller-form/controller-form.component';
// import { RfChainFormComponent } from './display-settings/rf-chain-form/rf-chain-form.component';

// import { SettingsComponent } from './settings.component';

@NgModule({
    imports: [
        CommonModule,
        SettingsRoutingModule,
        FormsModule   
    ],
    declarations: [       
        // SettingsComponent
        DisplaySettingsComponent
        // EntityFormComponent, SdrFormComponent, SbcFormComponent, ControllerFormComponent, RfChainFormComponent
    ]
})
export class SettingsModule { }

