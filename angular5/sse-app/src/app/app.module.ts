import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ServerSideEventComponent } from './server-side-event/server-side-event.component';
import { SseService } from './service/sse.service';


@NgModule({
  declarations: [
    AppComponent,
    ServerSideEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SseService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
