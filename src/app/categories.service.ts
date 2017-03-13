import {Injectable, Output} from '@angular/core';

@Injectable()
export class CategoriesService  {

  constructor() { }
  @Output() categorie ;

  setCategorie(n : number){
    this.categorie=n;
  }
  getCategorie(){
    return this.categorie;
  }
}
