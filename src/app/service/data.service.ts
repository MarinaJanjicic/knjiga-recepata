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
  id?: number;
  date: string;
  done: boolean;
  name: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}
