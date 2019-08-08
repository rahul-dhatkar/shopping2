import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  shoppingListState : Observable<{ingredients: Ingredient[]}>;
  private subscription : Subscription;

  constructor(private slService: ShoppingListService,
              private store: Store<{shoppingList : {
                ingredients : Ingredient[]
              } }>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    // this.subscription=  this.slService.imgredientChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }

  onEditItem(index : number){
    this.slService.startedEditing.next(index);

  }
  
  ngOnDestroy(){
    // this.subscription.unsubscribe();
  }

}
