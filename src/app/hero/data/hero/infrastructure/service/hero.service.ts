import { INITIAL_DATA } from '@HERO/data/__shared/__data/heroes';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeroModel } from '../../domain/models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private originalHeroData: HeroModel[] = INITIAL_DATA;
  hero$ = new BehaviorSubject<HeroModel[]>(INITIAL_DATA);

  constructor() { }

  getHeroes() {
    return this.hero$.asObservable();
  }
  
  setHero(val: any) {
    this.hero$.next(val);
  }

  setOriginalData(data: HeroModel[]): void {
    this.originalHeroData = data;
    this.hero$.next(data);
  }

  restoreOriginalData(): void {
    this.hero$.next(this.originalHeroData);
  }

  saveHero(val: HeroModel) {
    const currentHeroes = this.hero$.getValue();
    const updatedHeroes = [...currentHeroes, val];
    this.originalHeroData = updatedHeroes;
    this.setHero(updatedHeroes);
  }


  getByIdHero(id: string) {
    const currentHeroes = this.hero$.getValue();
    return currentHeroes.find((todo: HeroModel) => todo.id === id)
  }

  search(text: string) {
    if (text === '') { 
      this.restoreOriginalData();
    }else{ 
    const data = this.originalHeroData.filter((d:HeroModel)=> d.name.includes(text)) 
    this.setHero(data);
    }
  }

  deleteHero(id: string) {
    const currentHeroes = this.hero$.getValue();
    const deleteData = currentHeroes.filter((todo: HeroModel) => todo.id !== id)
    this.originalHeroData = deleteData;
    this.setHero(deleteData)
  }

  updateHero(updatedHero: HeroModel) {
    const currentHeroes = this.hero$.getValue();
    const index = currentHeroes.findIndex(hero => hero.id === updatedHero.id);

    if (index !== -1) {
      const updatedHeroes = [...currentHeroes];
      updatedHeroes[index] = updatedHero;
    this.originalHeroData = updatedHeroes;

      this.setHero(updatedHeroes);
    } else {
      console.error('Hero not found for update');
    }
  }
}
