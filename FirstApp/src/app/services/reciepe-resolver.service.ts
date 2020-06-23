import { DatabaseService } from "./database.service";
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Reciepe } from '../model/reciepe';
import { ReciepeService } from './reiepe.services';
@Injectable()
export class RecipeResolverService implements Resolve<Reciepe[]>{
    constructor(private _dbService: DatabaseService,
        private _reciepeService: ReciepeService) { }
    resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recieps = this._reciepeService.onReciepeSelected();
        if (recieps === null) {
            return this._dbService.onFetechData();
        }
        else {
            return recieps;
        }
    }
}