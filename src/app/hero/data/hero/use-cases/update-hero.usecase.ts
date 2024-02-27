import { HeroModel } from "../domain/models/hero.model";
import { HeroRepository } from "../domain/repository/hero.repository";

export const UpdateHeroUseCase =  (
  repository: HeroRepository,
  data      : HeroModel,
  )         : void=> repository.updateHero(data);

