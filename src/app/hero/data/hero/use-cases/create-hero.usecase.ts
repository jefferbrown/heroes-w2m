import { HeroModel } from "../domain/models/hero.model";
import { HeroRepository } from "../domain/repository/hero.repository";

export const CreateHeroUseCase =  (
  repository: HeroRepository,
  data      : HeroModel,
  )         : void=> repository.createHero(data);

