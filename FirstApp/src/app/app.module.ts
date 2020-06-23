import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { GameControlComponent } from './game-control/game-control.component';
// import { EvenNumberComponent } from './even-number/even-number.component';
// import { OddNumberComponent } from './odd-number/odd-number.component';
import { HeaderComponent } from './header/header.component';
// import { AppCopcikComponent } from './app-copcik/app-copcik.component';
// import { AppServerComponent } from './app-server/app-server.component';
//import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { CoreModule } from './core/core.module';
// import { ShoppingListModule } from './modules/shopping-list.module';
// import { ReciepeModule } from './modules/reciepe.module';
import { SharedModule } from './modules/shared.module';
//import { AuthModule } from './modules/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReciepeModule } from './modules/reciepe.module';

@NgModule({
  declarations: [
    AppComponent,
    //GameControlComponent,
    //EvenNumberComponent,
    //OddNumberComponent,
    HeaderComponent
    //AppCopcikComponent,
    //AppServerComponent
    //AngularFormsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ReciepeModule,
    CoreModule
    

    
  ],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
