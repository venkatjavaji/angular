import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ImgCardComponent } from './img-card/img-card.component';
import { 
  MatToolbarModule,
  MatCardModule,
  MatButtonModule 
} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    ImgCardComponent
  ],
  imports: [
    BrowserModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [],
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
