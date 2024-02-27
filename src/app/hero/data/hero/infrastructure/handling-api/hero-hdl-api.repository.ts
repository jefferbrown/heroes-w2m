import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeroModel } from '../../domain/models/hero.model';
import { HeroRepository } from '../../domain/repository/hero.repository';
import { HeroService } from '../service/hero.service';

export class HeroHdlApiRepository implements HeroRepository {
  constructor(private _http: HttpClient, private _heroService:HeroService) {}

  getAllHeroes(): Observable<HeroModel[]> {
    return this._heroService.getHeroes()
  }

  getByIdHero(id: string): HeroModel | undefined {
    return this._heroService.getByIdHero(id)
  }

  createHero( data:HeroModel): void{
      this._heroService.saveHero(data)
  }
  updateHero(data:HeroModel): void {
    this._heroService.updateHero(data)
  } 
  
  deleteHero(id:string): void {
     this._heroService.deleteHero(id)
  }
}
