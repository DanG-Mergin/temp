import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnclosuresComponent } from 'app/pages/enclosures-page/enclosures.component';

const routes: Routes = [
  {
    path: '',
     component: EnclosuresComponent,
    data: {
      title: 'Enclosures Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnclosuresRoutingModule { }
