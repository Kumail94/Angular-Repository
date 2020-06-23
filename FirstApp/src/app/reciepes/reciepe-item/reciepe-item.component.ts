import { Component, OnInit, Input } from '@angular/core';
import { Reciepe } from 'src/app/model/reciepe';

@Component({
  selector: 'app-reciepe-item',
  templateUrl: './reciepe-item.component.html',
  styleUrls: ['./reciepe-item.component.css']
})
export class ReciepeItemComponent implements OnInit {
 @Input() reciepe : Reciepe;
 @Input() index : number;
  ngOnInit() {
  }

}
