import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuGroupComponent } from './menu-group.component';

const routes: Routes = [
  {
    path: '',
    component: MenuGroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuGroupRoutingModule { }
