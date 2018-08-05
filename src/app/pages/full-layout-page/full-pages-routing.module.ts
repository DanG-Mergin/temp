import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullLayoutPageComponent } from 'app/pages/full-layout-page/full-layout-page.component';
//TODO: rename these files
const routes: Routes = [
  {
    path: '',
     component: FullLayoutPageComponent,
    data: {
      title: 'Scan'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullPagesRoutingModule { }
