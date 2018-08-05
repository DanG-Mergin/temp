import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TargetsPageComponent } from 'app/pages/targets-page/targets-page.component';

const routes: Routes = [
  {
    path: '',
     component: TargetsPageComponent,
    data: {
      title: 'Targets Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TargetsPageRoutingModule { }