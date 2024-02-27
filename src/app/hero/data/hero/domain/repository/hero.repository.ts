import { Observable } from "rxjs";
import { HeroModel } from "../models/hero.model";

export interface HeroRepository{
  getAllHeroes()            : Observable<HeroModel[]>;
  getByIdHero(id:string)    : HeroModel | undefined;
  createHero(data:HeroModel): void;
  updateHero(data:HeroModel): void;
  deleteHero(id:string)     : void;
  }
  