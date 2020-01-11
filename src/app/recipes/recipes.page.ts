import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [{
    id: 'r1',
    title: 'pizza',
    imageURL: 'https://i.pinimg.com/236x/e4/91/54/e49154874cb3cb411e759a3a465f16b4.jpg',
    ingredients: ['pizza base', 'capcicum', 'cheese']
  },
  {
    id: 'r2',
    title: 'Sandwich',
    imageURL: 'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2013/07/corn-sandwich-recipe01.jpg',
    ingredients: ['Bread', 'tomato', 'cheese']
  },
  {
    id: 'r3',
    title: 'Cake',
    // tslint:disable-next-line: max-line-length
    imageURL: 'https://2.bp.blogspot.com/-tBaVlde8WjQ/WluzDBUtThI/AAAAAAACozs/gfKnTBcslQAiln8NbTrs_wcjr5fqjjW0QCEwYBhgL/s1600/Classic%2BBlack%2BForest%2BCake%2B1.jpg',
    ingredients: ['wheat flour', 'sugar', 'cream', 'essence']
  }
];

  constructor() { }

  ngOnInit() {
  }

}
