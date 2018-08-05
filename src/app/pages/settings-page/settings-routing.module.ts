import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { SettingsComponent } from 'app/pages/settings-page/settings.component';
import { DisplaySettingsComponent } from './display-settings/display-settings.component';

const routes: Routes = [
  {
    path: 'display-settings',
    component: DisplaySettingsComponent,
    data: {
      title: 'Display'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }




// import { Dashboard1Component } from "./dashboard1/dashboard1.component";
// import { Dashboard2Component } from "./dashboard2/dashboard2.component";

// const routes: Routes = [
//   {
//     path: '',
//     children: [
//       {
//         path: 'dashboard1',
//         component: Dashboard1Component,
//         data: {
//           title: 'Dashboard 1'
//         }
//       },
//       {
//         path: 'dashboard2',
//         component: Dashboard2Component,
//         data: {
//           title: 'Dashboard 2'
//         }
//       },
//     ]
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class DashboardRoutingModule { }