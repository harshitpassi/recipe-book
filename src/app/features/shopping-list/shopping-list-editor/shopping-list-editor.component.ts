import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-editor',
  templateUrl: './shopping-list-editor.component.html',
  styleUrls: ['./shopping-list-editor.component.css']
})
export class ShoppingListEditorComponent implements OnInit {
  @ViewChild('nameInput') nameElement: ElementRef;
  @ViewChild('amountInput') amountElement: ElementRef;
  @Output() populatedIngredient =  new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  populateIngredient() {
    this.populatedIngredient.emit(new Ingredient(this.nameElement.nativeElement.value,
       this.amountElement.nativeElement.value));
  }

}
