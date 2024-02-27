import { Observable } from "rxjs";
import { HeroModel } from "../domain/models/hero.model";
import { HeroRepository } from "../domain/repository/hero.repository";

export const GetAllHeroesUseCase =  (repository: HeroRepository, ): Observable<HeroModel[]> => repository.getAllHeroes(); 

