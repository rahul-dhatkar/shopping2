import { Ingredient } from 'src/shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{
   imgredientChanged = new Subject<Ingredient[]>();
   startedEditing= new Subject<number>();

    private ingredients : Ingredient[] = [
        new Ingredient('apples',5),
        new Ingredient('tomatoes',10), 
      ];

    getIngredients(){
            return this.ingredients.slice();
    }

    getIngredient(index : number){
        return this.ingredients[index];

    }

    addIngredient(ingredient : Ingredient){
            this.ingredients.push(ingredient);
            this.imgredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients : Ingredient[]){
        // for(let ingredient of ingredients){
        //         this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.imgredientChanged.next(this.ingredients.slice());
    }

    updateIngredient(index : number, newIngredient :  Ingredient)
    {
      this.ingredients[index] = newIngredient;
      this.imgredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index : number){
        this.ingredients.splice(index,1);
        this.imgredientChanged.next(this.ingredients.slice());
    }
}