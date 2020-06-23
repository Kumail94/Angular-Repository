import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ReciepeService } from '../../services/reiepe.services';
import { Reciepe } from 'src/app/model/reciepe';

@Component({
  selector: 'app-reciepe-edit',
  templateUrl: './reciepe-edit.component.html',
  styleUrls: ['./reciepe-edit.component.css']
})
export class ReciepeEditComponent implements OnInit {
  id: number;
  editMode = false;

  get IngrediantControls(){
    return (this.reciepeForm.get('ingrediants') as FormArray).controls;
  }

  constructor(private route: ActivatedRoute,
    private router: Router,
    private reciepeService: ReciepeService) { }
  reciepeForm: FormGroup
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log('Route Params: ', this.id);
        this.editMode = params['id'] != null
        console.log(this.editMode);
        this.initializeForm();
      });
  }

  
  onSubmit() {
    console.log(this.reciepeForm);
    const data = new Reciepe(
        this.reciepeForm.value['Name']
      , this.reciepeForm.value['imagePath']
      , this.reciepeForm.value['description']
      , this.reciepeForm.value['ingrediants']
    )
    if (this.editMode) {
      this.reciepeService.updateReciepe(this.id, data);
    } else {
      this.reciepeService.addReciepe(data);
    }
    this.onCancel();
  }
  initializeForm() {
    let reciepeName = '';
    let reciepeImagePath = '';
    let reciepeDescription = '';
    let reciepeIngrediants = new FormArray([]);

    if (this.editMode) {
      const reciepe = this.reciepeService.getReciepe(this.id);
      reciepeName = reciepe.name;
      reciepeImagePath = reciepe.imagePath;
      reciepeDescription = reciepe.description;
      if (reciepe['ingrediants']) {
        for (let ing of reciepe.ingrediant) {
          reciepeIngrediants.push(
            new FormGroup({
              'name': new FormControl(ing.name, Validators.required),
              'amount': new FormControl(ing.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }
    this.reciepeForm = new FormGroup({
      'Name': new FormControl(reciepeName, Validators.required),
      'imagePath': new FormControl(reciepeImagePath, Validators.required),
      'description': new FormControl(reciepeDescription, Validators.required),
      'ingrediants': reciepeIngrediants
    });
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onAddIngrediants() {
    (<FormArray>this.reciepeForm.get('ingrediants')).push(
      new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required])
      })
    );
  }
  onDeleteIngrediants(index: number) {
    (<FormArray>this.reciepeForm.get('ingrediants')).removeAt(index);
  }
}
