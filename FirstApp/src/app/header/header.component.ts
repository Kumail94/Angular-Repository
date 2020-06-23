import { Component, OnInit} from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 isAunthenticateMode;
  constructor(private _service : DatabaseService,
    private _authService : AuthService) { }

  ngOnInit() {
    this._authService.userAuthentication.subscribe(user=>{
      this.isAunthenticateMode = !user ? false : true;
    })
  }
  save(){
    this._service.onSaveData();
  }
  fetch(){
    this._service.onFetechData().subscribe(response=>{
      console.log(response);
    });
  }
  onLogout(){
    this._authService.LogOut();
  }
}
