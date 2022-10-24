import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimacionComponent } from './animacion/animacion.component';

const routes: Routes = [{path:'h', component:AnimacionComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
