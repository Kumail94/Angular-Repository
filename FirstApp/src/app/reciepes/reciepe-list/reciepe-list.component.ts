import { Component, OnInit} from '@angular/core';
import { ReciepeService } from '../../services/reiepe.services';
import { Router, ActivatedRoute } from '@angular/router';
import { Reciepe } from 'src/app/model/reciepe';
@Component({
  selector: 'app-reciepe-list',
  templateUrl: './reciepe-list.component.html',
  styleUrls: ['./reciepe-list.component.css']
})
export class ReciepeListComponent implements OnInit {
 reciepes : Reciepe[];
  constructor(
              private reciepeService : ReciepeService,  
              private router : Router, 
              private route : ActivatedRoute
              ) { 
    console.log("Reciepe List Constructor");
  }

  ngOnInit() {
    this.reciepeService.reciepeChanged.subscribe((response: Reciepe[]) => {
      this.reciepes = response;
      console.log('Reciepe Response: ',this.reciepes);
    });
    
  }
  NewReciepe(){
    this.router.navigate(['new'], {relativeTo : this.route});
  }  

}
