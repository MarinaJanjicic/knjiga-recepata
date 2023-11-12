import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  collectionData,
  doc,
  deleteDoc,
  addDoc
} from '@angular/fire/firestore';
import { updateDoc } from 'firebase/firestore';


//  atributi inferfejsa se moraju poklapati sa poljima u dokumentu Firebase baze podataka
export interface Recipe {
  id?:number;
  name:string;
  category:string;
  description:string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  //funkcija vraca recepte iz kolekcije
  getRecipes() {
    const recipesRef = collection(this.firestore, 'items');
    return collectionData(recipesRef, { idField: 'id' });
  }

//funkcija za brisanje
  deleteRecipe(recipe: Recipe) {
    const recipeRef = doc(this.firestore, `items/${recipe.name}`);
    return deleteDoc(recipeRef);
  }

  //funkcija za dodavanje
  addRecipe(recipe: Recipe) {
    
    const recipeRef = collection(this.firestore, 'items');
    return addDoc(recipeRef, recipe);
  }

  updateRecipe(recipe: Recipe) {
    const recipeRef = doc(this.firestore, `items/${recipe.name}`);
    return updateDoc(recipeRef, {
      name: recipe.name,
      category:recipe.category,
      description:recipe.description
    });
  }

  


}

