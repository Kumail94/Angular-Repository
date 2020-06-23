import { NgModule } from '@angular/core';
import { DropDownDirective } from '../Shared/drop-down.directive';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations:[
       DropDownDirective 
    ],
   imports:[CommonModule],
    exports:[
        DropDownDirective,
        CommonModule
    ]

})
export class SharedModule{}