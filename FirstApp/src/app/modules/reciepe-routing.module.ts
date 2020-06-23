import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth.guard.service';
import { ReciepesComponent } from '../reciepes/reciepes.component';
import { ReciepeStartComponent } from '../reciepes/reciepe-start/reciepe-start.component';
import { ReciepeEditComponent } from '../reciepes/reciepe-edit/reciepe-edit.component';
import { ReciepeDetailComponent } from '../reciepes/reciepe-detail/reciepe-detail.component';
import { RecipeResolverService } from '../services/reciepe-resolver.service';
const routes = [
    {
        path: 'reciepe', component: ReciepesComponent, canActivate: [AuthGuard],
        children: [
            { path: '', component: ReciepeStartComponent },
            { path: 'new', component: ReciepeEditComponent },
            { path: ':id', component: ReciepeDetailComponent, resolve: [RecipeResolverService] },
            { path: ':id/edit', component: ReciepeEditComponent, resolve: [RecipeResolverService] }
        ]
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReciepeRoutingModule { }