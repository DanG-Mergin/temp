import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '/full-layout', title: 'Cells', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/operate', title: 'Operate', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/targets-page', title: 'Targets', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '', title: 'Settings', icon: 'ft-layout', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, 
            submenu: [
            
                { path: '/settings/enclosures', title: 'Enclosures', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                
            ]
    },

// { path: '/settings/display-settings', title: 'Display Settings', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

    
    // {
    //     path: '/content-layout', title: 'Content Layout', icon: 'ft-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    // {
    //     path: '', title: 'Menu Levels', icon: 'ft-align-left', class: 'has-sub', badge: '1', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
    //     submenu: [
    //         { path: 'javascript:;', title: 'Second Level', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //         {
    //             path: '', title: 'Second Level Child', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    //             submenu: [
    //                 { path: 'javascript:;', title: 'Third Level 1.1', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //                 { path: 'javascript:;', title: 'Third Level 1.2', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     path: '/changelog', title: 'ChangeLog', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    // { path: 'https://pixinvent.com/apex-angular-4-bootstrap-admin-template/documentation', title: 'Documentation', icon: 'ft-folder', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    // { path: 'https://pixinvent.ticksy.com/', title: 'Support', icon: 'ft-life-buoy', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },

];


// path    the route to put in routerLink
// title    The name shown in the navigation menu
// icon    the material icon to be used
// class    Class will be ‘’ if it is a child menu and also if it does not have any child menu else value will be has-sub
// badge    Text that you want to display on badge.value can be ‘’ as well in case you don't want to display badge.
// badgeClass    Class will be either ‘’ if there is no badge or you can provide css class for badge.
// isExternalLink    If you want to navigate to external link value will be true else it will be false
// submenu    Value will be [] if there is no sub menu for that menu or you can provide submenu item, if any.