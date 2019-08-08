import * as ShoppingListActions from './shopping-list.actions';

import { Ingredient } from 'src/shared/ingredient.model';



const initalState={
    ingredients :[
        new Ingredient('apples',5),
        new Ingredient('tomatoes',10), 
      ]
};

export function shoppingListReducer(state =initalState , action : ShoppingListActions.ShoppingListActions) {
    switch ( action.type ) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients : [...state.ingredients , action.payload]
            }
        default:
                return state;
    }
    
}