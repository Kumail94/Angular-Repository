import { NgModule } from "@angular/core";
import { HttpModule } from '@angular/http';
import { DatabaseService } from '../services/database.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from '../services/HttpInterceptor.service';
import { AuthGuard } from '../services/auth.guard.service';
import { AuthService } from '../services/auth.services';
import { ReciepeService } from '../services/reiepe.services';
import { ShoppingListService } from '../services/shopping-list.services';
import { RecipeResolverService } from '../services/reciepe-resolver.service';

@NgModule({
    imports: [HttpModule , HttpClientModule],
    providers: [
        ReciepeService,
        ShoppingListService,
        DatabaseService,
        RecipeResolverService,
        {
        provide:HTTP_INTERCEPTORS,
        useClass : HttpInterceptorService,
        multi : true    
        },
        AuthGuard,
        AuthService
    ],

    declarations: []
})
export class CoreModule { }