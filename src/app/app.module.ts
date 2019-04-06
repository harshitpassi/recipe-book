import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './features/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './features/recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './features/recipe-book/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';
import { ShoppingListEditorComponent } from './features/shopping-list/shopping-list-editor/shopping-list-editor.component';
import { HeaderComponent } from './header/header.component';
import { RecipeBookComponent } from './features/recipe-book/recipe-book.component';
import { DropdownDirective } from './features/shared/dropdown.directive';
import { NoRecipeComponent } from './features/recipe-book/recipe-list/no-recipe/no-recipe.component';
import { RecipeEditorComponent } from './features/recipe-book/recipe-editor/recipe-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditorComponent,
    HeaderComponent,
    RecipeBookComponent,
    DropdownDirective,
    NoRecipeComponent,
    RecipeEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
