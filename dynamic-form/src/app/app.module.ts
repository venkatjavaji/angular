import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocFormComponent } from './doc-form/doc-form.component';
import { DynamicFormService } from './service/doc.form.service';

@NgModule({
  declarations: [
    AppComponent,
    DocFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [DynamicFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
