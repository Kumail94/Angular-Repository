import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Reciepe } from '../model/reciepe';
import { Ingrediant } from '../model/ingredient';
import { ShoppingListService } from './shopping-list.services';

@Injectable()
export class ReciepeService {
  reciepeChanged = new Subject<Reciepe[]>();
  private reciepes: Reciepe[] = [
    // new Reciepe(
    //   "Big Jumbo Pasta",
    //   "https://www.cscassets.com/recipes/wide_cknew/wide_24099.jpg",
    //   "We are offering the most and hygenic Pasta for our customers ",
    //   [new Ingrediant('Water Melon', 250),
    //   new Ingrediant('Mango', 300)]

    // ),
    // new Reciepe(
    //   "General Mills",
    //   "https://images-gmi-pmc.edge-generalmills.com/5efef778-f865-4ff6-bc3b-89ec7a62dc93.jpg",
    //   "Fully hygnice mill offered by us",
    //   [new Ingrediant('Pizza', 500),
    //   new Ingrediant('Banana', 120)]
    // ),
    // new Reciepe(
    //   "Test Reciepe Image",
    //   "https://www.cscassets.com/recipes/wide_cknew/wide_26291.jpg",
    //   "Etract from online-website",
    //   [new Ingrediant('Peanut', 350),
    //   new Ingrediant('Strawberry', 170)]
    // ),
    // new Reciepe(
    //   "Test Reciepe Image",
    //   "https://realfood.tesco.com/media/images/RFO-1400x919-Cauliflower-cheese-pithivier-17921d83-b16f-4ff0-94f4-380df23c7b95-0-1400x919.jpg",
    //   "Etract from online-website",
    //   [new Ingrediant('Zigner Burger', 250),
    //   new Ingrediant('Apple', 170)]
    // ),
    // new Reciepe(
    //   "Test Reciepe Image",
    //   "https://static01.nyt.com/images/2019/07/28/dining/28mag-eat/28mag-eat-articleLarge.jpg",
    //   "Etract from online-website",
    //   [new Ingrediant('Butter Peef', 150),
    //   new Ingrediant('Grapes', 120)]
    // ),
   ];
  constructor(private slService: ShoppingListService) {
    console.log("Injectable Shopping Service: ", slService);
  }
  onReciepeSelected() {
    return  this.reciepes.slice();
 }
  getReciepe(index: number) {
    return this.reciepes[index];
  }
  setReciepe(response: Reciepe[]) {
    this.reciepes = response;
    console.log("Set Reciepe: " , this.reciepes);
    this.reciepeChanged.next(this.reciepes.slice());
  }
  addReciepe(reciepe:Reciepe){
    this.reciepes.push(reciepe);
    this.reciepeChanged.next(this.reciepes.slice());
  }
  updateReciepe(index : number , reciepe : Reciepe){
    this.reciepes[index] = reciepe;
    this.reciepeChanged.next(this.reciepes.slice());
  }
  deleteReciepe(index:number){
    this.reciepes.splice(index , 1);
    this.reciepeChanged.next(this.reciepes.slice());
  }
  addIngrediantstoShoppingList(ingredient: Ingrediant[]) {
    this.slService.addIngrediants(ingredient);
  }
}
