import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";

import { AuthGuard } from './shared/auth/auth-guard.service';
import {Ticket_ROUTES} from "./shared/routes/ticket.routes";
import { LoginPageComponent } from "./pages/content-layout-page/login-page/login-page.component";



const appRoutes: Routes = [
  // {
  //   path: '',
  //   component: LoginPageComponent,
  //       data: {
  //         title: 'Login Page'
  //       },
  //   pathMatch: 'full',
  // },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'logout',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ContentLayoutComponent,
    data: { title: 'content Views' },
    children:  CONTENT_ROUTES
  },
  { path: '',
   component: FullLayoutComponent,
    data: { title: 'full Views' },
    children:  [
      {
        path: '',
        loadChildren: './pages/full-layout-page/full-pages.module#FullPagesModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'user',
        loadChildren: './pages/user-management/user-management.module#UserManagementModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'content',
        loadChildren: './pages/content-management/content-management.module#ContentManagementModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'portal',
        loadChildren: './pages/portal-management/portal-management.module#PortalManagementModule',
        canActivate: [AuthGuard]
      },
    ]
  },
  // { path: '', 
  //   component: ContentLayoutComponent, 
  //   data: { title: 'content Views'}, 
  //   children: CONTENT_ROUTES,
  //   canActivate: [AuthGuard]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
