import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingrediant } from '../model/ingredient';
import { ShoppingListService } from '../services/shopping-list.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private shoppingSubjected: Subscription;
  ingredients: Ingrediant[];

  constructor(private shoppingService: ShoppingListService) {
    console.log('Shopping List Constructor:');
  }

  ngOnInit() {

    this.ingredients = this.shoppingService.getIngrediants();
    this.shoppingSubjected = this.shoppingService.ingrediantSubject.subscribe(
      (responseData: Ingrediant[]) => {
        this.ingredients = responseData;
      });

  }
  onEdited(index: number) {
    this.shoppingService.editIngrdiantIndex.next(index);
  }
  ngOnDestroy() {
    this.shoppingSubjected.unsubscribe();
    console.log('Unsubscribe : ', this.shoppingSubjected.unsubscribe());
  }
}
