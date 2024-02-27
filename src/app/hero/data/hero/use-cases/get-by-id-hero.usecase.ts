import { HeroModel } from "../domain/models/hero.model";
import { HeroRepository } from "../domain/repository/hero.repository";

export const GetByIdHeroUseCase = async (
    repository: HeroRepository, 
    id:string,
  ): Promise<HeroModel | undefined> => await repository.getByIdHero(id); 

