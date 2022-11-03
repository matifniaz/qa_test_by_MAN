import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PicturesListViewComponent } from './pages/pictures-list-view/pictures-list-view.component';
import { PicturesDetailViewComponent } from './pages/pictures-detail-view/pictures-detail-view.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { PictureComponent } from './components/picture/picture.component';

@NgModule({
  declarations: [
    AppComponent,
    PicturesListViewComponent,
    PicturesDetailViewComponent,
    LoadingComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
