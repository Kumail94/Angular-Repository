import { Component, OnInit } from '@angular/core';
import { ReciepeService } from '../services/reiepe.services';

@Component({
  selector: 'app-reciepes',
  templateUrl: './reciepes.component.html',
  styleUrls: ['./reciepes.component.css'],

})
export class ReciepesComponent implements OnInit {

  constructor(private reciepeService : ReciepeService) {
    console.log("Reciepe Constructor.!");
    
   }

  ngOnInit() {
    var data = this.reciepeService.onReciepeSelected();
    console.log("Reciepe Component: ",data);  
  }
  

}
