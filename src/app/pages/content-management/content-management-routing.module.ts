import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadContentComponent } from './upload-content/upload-content.component';
import {ApproveContentComponent} from './approve-content/approve-content.component';
import { ContentProviderComponent } from './content-provider/content-provider.component';


const routes: Routes = [
    {
        path: '',
        children: [
          {
            path: 'upload',
            component: UploadContentComponent,
            data: {
              title: 'Upload Content Page'
            }
          },{
            path: 'approve',
            component: ApproveContentComponent,
            data: {
              title: 'Approve Content Page'
            }
          },{
            path: 'contentprovider',
            component: ContentProviderComponent,
            data: {
              title: 'Content Provider Page'
            }
          }
        ]
      }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentManagementRoutingModule { }