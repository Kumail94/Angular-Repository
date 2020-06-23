import { NgModule } from '@angular/core';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { EditComponent } from '../shopping-list/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth.guard.service';
import { SharedModule } from './shared.module';

@NgModule({
    declarations:[
        ShoppingListComponent,  
        EditComponent,   
    ],
    imports:[
        FormsModule,
        RouterModule.forChild([
            {path: '', component: ShoppingListComponent , canActivate : [AuthGuard]}
        ]),
        SharedModule
    ]
})
export class ShoppingListModule{}