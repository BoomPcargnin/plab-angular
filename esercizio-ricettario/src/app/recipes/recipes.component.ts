import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  showRecipeForm = false
  recipes : Recipe[] = [{
    name: 'Pasticcio',
    image: 'https://images.unsplash.com/photo-1597289124948-688c1a35cb48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    description: 'Come quello di nonna',
    ingredients: [{
      name: 'Besciamella',
      quantity: 200,
      unit: 'gr'
    }]
  }]
  activeRecipe

  constructor() { }

  ngOnInit(): void {
  }

  onShowRecipeForm(recipe : Recipe = null){
  this.showRecipeForm = true
  }

  onSelectRecipe(recipe : Recipe){
    this.activeRecipe = recipe
  }
}
