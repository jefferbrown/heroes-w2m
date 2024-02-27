import { HeroRepository } from "../domain/repository/hero.repository";

export const DeleteHeroUseCase =  (
  repository: HeroRepository,
  id      : string,
  )         : void=> repository.deleteHero(id);

