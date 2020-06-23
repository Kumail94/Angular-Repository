import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/reciepe', pathMatch: 'full' },
  //{ path :'reciepe',loadChildren:'./modules/reciepe.module#ReciepeModule'},
  { path :'shopping-list',loadChildren:'./modules/shopping-list.module#ShoppingListModule'},
  { path :'auth',loadChildren:'./modules/auth.module#AuthModule'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
