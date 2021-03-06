import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    ingredientAdded = new Subject<void>();
    private ingredients: Ingredient[] = [
        new Ingredient('Test Ingredient', 12),
        new Ingredient('Pineapple Slices', 15)
    ];

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}
