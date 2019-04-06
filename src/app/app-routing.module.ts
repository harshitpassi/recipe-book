import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookComponent } from './features/recipe-book/recipe-book.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';
import { NoRecipeComponent } from './features/recipe-book/recipe-list/no-recipe/no-recipe.component';
import { RecipeDetailComponent } from './features/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeEditorComponent } from './features/recipe-book/recipe-editor/recipe-editor.component';

const routes: Routes = [
  {path: 'recipe-book', component: RecipeBookComponent, children: [
    {path: '', component: NoRecipeComponent},
    {path: 'new', component: RecipeEditorComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditorComponent}
  ]},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '', redirectTo: 'recipe-book', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
