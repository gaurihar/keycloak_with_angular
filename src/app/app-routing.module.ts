import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component'
import {GoogleComponent} from './component/google/google.component'
import {AuthGuard} from '../app/utility/app.guard'
import {KibanaComponent} from './component/kibana/kibana.component'


const routes: Routes = [
 {path:'' ,redirectTo:'menu',pathMatch:'full'},
  {path:'menu',component:MenuComponent,canActivate:[AuthGuard]},
  {path:'google',component:GoogleComponent
},
{path:'kibana',component:KibanaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
