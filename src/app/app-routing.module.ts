import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import config from './config';
import { PicturesDetailViewComponent } from './pages/pictures-detail-view/pictures-detail-view.component';
import { PicturesListViewComponent } from './pages/pictures-list-view/pictures-list-view.component';

const routes: Routes = [
  { path: config.routes.home, component: PicturesListViewComponent },
  { path: config.routes.picturesDetailView, component: PicturesDetailViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
