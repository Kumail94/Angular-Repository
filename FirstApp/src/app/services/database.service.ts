import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from './auth.services';
import { Reciepe } from '../model/reciepe';
import { ReciepeService } from './reiepe.services'

@Injectable({ providedIn: 'root' })
export class DatabaseService {
    constructor(private _http: HttpClient,
        private _service: ReciepeService,
        private _authService: AuthService) { }
    onSaveData() {
        const data = this._service.onReciepeSelected();
        return this._http.put('https://angularapplication-f2062.firebaseio.com/data.json', data)
            .subscribe(response => {
                console.log('Post to Api', response);
            }, err => {
                console.log(err);
            });
    }
    onFetechData() {
        return this._authService.userAuthentication.pipe(take(1), exhaustMap(user => {
            return this._http.get<Reciepe[]>('https://angularapplication-f2062.firebaseio.com/data.json')
                .pipe(map(response => {
                    console.log("Observable =  " , response);
                    return response.map(rec => {
                        return {
                            ...rec,
                            ingrediant: rec.ingrediant ? rec.ingrediant : []
                        };
                       
                    });
                }), tap(result => {
                    this._service.setReciepe(result);
                    console.log("Responseded: ", result);
                }, err => {
                    console.log(err);
                })
                )
            })
        )
    }
}

