import { Component, OnInit } from '@angular/core';
import { ReciepeService } from '../../services/reiepe.services';

@Component({
  selector: 'app-reciepe-start',
  templateUrl: './reciepe-start.component.html',
  styleUrls: ['./reciepe-start.component.css']
})
export class ReciepeStartComponent implements OnInit {

  constructor(private service : ReciepeService) { }
 
  ngOnInit() {
    
  }

}
