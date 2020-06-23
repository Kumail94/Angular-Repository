import { NgModule } from '@angular/core';
import { AuthComponent } from '../auth-component/auth-component.component';
import { SharedModule } from './shared.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[AuthComponent],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component:AuthComponent }
        ]),
        SharedModule
    ],
 
})
export class AuthModule{}