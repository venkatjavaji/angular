import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServerSideEventComponent } from './server-side-event/server-side-event.component';

const routes: Routes = [
  { path: 'sse', component: ServerSideEventComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports : [RouterModule]
})
export class AppRoutingModule { }
