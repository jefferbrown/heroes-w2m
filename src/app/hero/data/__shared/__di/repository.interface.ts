 
import { HttpClient } from "@angular/common/http";
import { HeroHdlApiRepository } from "../../hero/infrastructure/handling-api/hero-hdl-api.repository";
import { HeroService } from "../../hero/infrastructure/service/hero.service";
import { Repository } from "../repositories/repository.interface";

export enum REPOSITORY { 
    HERO = 'HEROE',
  }

  export const REPOSITORY_FACTORY: Record<REPOSITORY, (http: HttpClient, heroService:HeroService) => Repository> = {
    [REPOSITORY.HERO]          : (http: HttpClient, heroService:HeroService)=> new HeroHdlApiRepository(http,heroService),
  };
  