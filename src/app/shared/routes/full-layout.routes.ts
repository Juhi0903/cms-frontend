import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: '',
    loadChildren: './pages/full-layout-page/full-pages.module#FullPagesModule'
  },
];