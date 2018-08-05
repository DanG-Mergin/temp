import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperatePageComponent } from 'app/pages/operate-page/operate-page.component';

const routes: Routes = [
  {
    path: '',
     component: OperatePageComponent,
    data: {
      title: 'Operate Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatePageRoutingModule { }