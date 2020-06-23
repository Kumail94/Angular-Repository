import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 constructor(private _AuthService : AuthService){}
  ngOnInit(){
    this._AuthService.autoLogin();
  }
  title = 'Angular Application';
  EvenNumbers : number[] = [];
  OddNumbers : number[] = [];
  serverElements = [{type : 'server' , name : 'Add Server' ,  content : 'Test Server'}];

  OnInterval(fieldNumber : number){
  if (fieldNumber % 2 === 0) {
    this.EvenNumbers.push(fieldNumber);
  }
  else{
    this.OddNumbers.push(fieldNumber);
  }
}

onAddedServer(serve:{ServerName : string , ServerContent : string}){
this.serverElements.push({
  type : 'server',
  name : serve.ServerName,
  content : serve.ServerContent});
console.log(this.serverElements);  
}
onAddedBluePrint(blue:{ServerName : string , ServerContent : string}){
this.serverElements.push({
  type : 'bluePrint',
  name : blue.ServerName,
  content : blue.ServerContent});
  console.log(this.serverElements);  
}
}
