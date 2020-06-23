import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { ReciepeRoutingModule } from './reciepe-routing.module';
import { SharedModule } from './shared.module';
import { RouterModule } from '@angular/router';
import { ReciepesComponent } from '../reciepes/reciepes.component';
import { ReciepeListComponent } from '../reciepes/reciepe-list/reciepe-list.component';
import { ReciepeDetailComponent } from '../reciepes/reciepe-detail/reciepe-detail.component';
import { ReciepeItemComponent } from '../reciepes/reciepe-item/reciepe-item.component';
import { ReciepeStartComponent } from '../reciepes/reciepe-start/reciepe-start.component';
import { ReciepeEditComponent } from '../reciepes/reciepe-edit/reciepe-edit.component';

@NgModule({
    declarations:[
        ReciepesComponent,
        ReciepeListComponent,
        ReciepeDetailComponent,
        ReciepeItemComponent,
        ReciepeStartComponent,
        ReciepeEditComponent,
    ],
    imports:[
        ReactiveFormsModule,
        CoreModule,
        ReciepeRoutingModule,
        RouterModule,
        SharedModule
    ]  
})
export class ReciepeModule{}