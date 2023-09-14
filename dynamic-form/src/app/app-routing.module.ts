import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocFormComponent } from './doc-form/doc-form.component';

const routes: Routes = [
  {
    path : "doc", component : DocFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
