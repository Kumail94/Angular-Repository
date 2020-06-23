import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Ingrediant } from '../model/ingredient';
@Injectable()
export class ShoppingListService {
    ingrediantSubject = new Subject<Ingrediant[]>();
    editIngrdiantIndex = new Subject<Number>();
    private ingredients: Ingrediant[] = [
        new Ingrediant('Banana', 100),
        new Ingrediant('Apple', 250)
    ];
    getIngrediants() {
        return this.ingredients.slice();
    }
    getIngrediant(index:number){
        return this.ingredients[index];
    }
    addIngrediant(ingrediant: Ingrediant) {
        this.ingredients.push(ingrediant);
        this.ingrediantSubject.next(this.ingredients.slice());
    }
    addIngrediants(ingrediant: Ingrediant[]) {
        this.ingredients.push(...ingrediant);
        this.ingrediantSubject.next(this.ingredients.slice());
    }
    updateIngrediants(index:number , ingrediant:Ingrediant){
        this.ingredients[index] = ingrediant
        this.ingrediantSubject.next(this.ingredients.slice()); 
    }
    deleteIngediants(index:number){
       this.ingredients.splice(index , 1);
       this.ingrediantSubject.next(this.ingredients.slice());
    }
}