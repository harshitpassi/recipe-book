import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({providedIn: 'root'})
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel',
         'A schnitzel is meat, usually thinned by pounding.',
         'https://farm6.staticflickr.com/5779/20118678243_d03f43451d_z.jpg',
         [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
         ]),
         new Recipe('Big Fat Burger',
          `A sandwich consisting cooked patties of meat.`,
         'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Burger_King_Buck_Double.jpg/2560px-Burger_King_Buck_Double.jpg',
         [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
         ])
      ];

    constructor(private slService: ShoppingListService) {}

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    sendIngredientsToShoppingList(ingredients: Ingredient[]) {
        ingredients.forEach((ingredient) => this.slService.addIngredient(ingredient));
        this.slService.ingredientAdded.emit();
    }
}
