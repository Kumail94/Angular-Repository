import { Component, OnInit } from '@angular/core';
import { ReciepeService } from '../../services/reiepe.services';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Reciepe } from 'src/app/model/reciepe';

@Component({
  selector: 'app-reciepe-detail',
  templateUrl: './reciepe-detail.component.html',
  styleUrls: ['./reciepe-detail.component.css']
})
export class ReciepeDetailComponent implements OnInit {
  reciepe: Reciepe;
  id: number;
  constructor(private reciepeService: ReciepeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log('Reciepe Detail Constructor..!');
  }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.reciepe = this.reciepeService.getReciepe(this.id);
      console.log(this.reciepe);
    });
  }
  addShoppingToList() {
    this.reciepeService.addIngrediantstoShoppingList(this.reciepe.ingrediant);
    this.router.navigate(['/shopping-list'], { relativeTo: this.route });
  }
  EditReciepe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  DeleteReciepe() {
    this.reciepeService.deleteReciepe(this.id);
    this.router.navigate(['/reciepe', { relativeTo: this.route }]);
  }
}
