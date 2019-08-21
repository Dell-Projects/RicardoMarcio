import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RmHandlerComponent } from './rm-handler/rm-handler.component';


const routes: Routes = [
  {path: '', component: RmHandlerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
