import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReciepeService } from 'src/app/services/reiepe.services';
import { Ingrediant } from 'src/app/model/ingredient';
import { ShoppingListService } from 'src/app/services/shopping-list.services';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild('f', { static: false }) slForm: NgForm
  editMode = false;
  editItemIndex;
  editItems;
  name : string;
  val : number;
  // selectedValue : string = 'One';

  constructor(private shoppingService: ShoppingListService,
    private service: ReciepeService) { }
    // items : Item[] = [{name:'One', val:1},{name:'Two', val:2},{name:'Three' , val:3}];
  ngOnInit() {
    this.shoppingService.editIngrdiantIndex.subscribe(
      (id: number) => {
        console.log(id);
        this.editItemIndex = id;
        this.editMode = true;
        this.editItems = this.shoppingService.getIngrediant(id);
        console.log(this.editItems);
        this.slForm.setValue({
          name: this.editItems.name,
          amount: this.editItems.amount

        });

      })
  }
  onSubmit(form: NgForm) {
    const data = form.value;
    const ingrediant = new Ingrediant(data.name, data.amount);
    if (this.editMode) {
      this.shoppingService.updateIngrediants(this.editItemIndex, ingrediant);
    } else {
      this.shoppingService.addIngrediant(ingrediant);
      this.editMode = false;
    }
  }
  onClear() {
    this.slForm.resetForm();
    this.editMode = false;
  }
  onDelete() {
    this.shoppingService.deleteIngediants(this.editItemIndex);
    this.onClear();
  }
}
export class Item{
  public name : string;
  public val : number;
}