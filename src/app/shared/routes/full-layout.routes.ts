import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer  
//TODO: There must be a more elegant way to structure this nav DHG 4-26
export const Full_ROUTES: Routes = [
  {
    path: 'settings',
    loadChildren: './pages/settings-page/settings.module#SettingsModule'
  },
  {
    path: 'settings/enclosures',
    loadChildren: './pages/enclosures-page/enclosures.module#EnclosuresModule'
  },
  // {
  //   path: 'settings/display-settings',
  //   loadChildren: './pages/settings/display-settings/display-settings.module#DisplaySettingsModule'
  // },
  {
    path: 'full-layout',
    loadChildren: './pages/full-layout-page/full-pages.module#FullPagesModule'
  },
  {
    path: 'targets-page',
    loadChildren: './pages/targets-page/targets.module#TargetsModule'
  },
  {
    path: 'operate',
    loadChildren: './pages/operate-page/operate.module#OperateModule'
  }
];