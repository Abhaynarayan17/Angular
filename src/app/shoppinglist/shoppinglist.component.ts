import { Component } from '@angular/core';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shoppinglist.component.html' 

})
export class ShoppingListComponent {
  newItem = '';
  shoppingList: string[] = [];
  addItem() {
    if (this.newItem.trim() !== '') { 
      this.shoppingList.push(this.newItem);
      this.newItem = '';
      
    }
  }
}