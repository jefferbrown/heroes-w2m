import { TestBed } from '@angular/core/testing';
import { HeroModel, TYPE_UNIVERSE } from '../../domain/models/hero.model';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  let heroService: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService],
    });

    heroService = TestBed.inject(HeroService);
  });

  it('Should be created HeroService', () => {
    expect(heroService).toBeTruthy();
  });

  it('Should get initial heroes', (done) => {
    heroService.getHeroes().subscribe((heroes) => {
      expect(heroes).toEqual(heroService.hero$.value);
      done();
    });
  });

  it('Should set hero', (done) => {
    const newHeroes: HeroModel[] = [{ id: '3', name: 'Superman', description:"Mucha fuerza", age:12, universe_img: TYPE_UNIVERSE.MARVEL, power: "Volar"  }];
    heroService.setHero(newHeroes);

    heroService.getHeroes().subscribe((heroes) => {
      expect(heroes).toEqual(newHeroes);
      done();
    });
  }); 

  it('Should search for heroes by name', (done) => {
    const searchTerm = 'Man';
    heroService.search(searchTerm);

    heroService.getHeroes().subscribe((heroes) => {
      const filteredHeroes = heroes.filter((hero) => hero.name.includes(searchTerm));
      expect(heroes).toEqual(filteredHeroes);
      done();
    });
  });
 
  it('Should restore original data', (done) => {
    heroService.restoreOriginalData();

    heroService.getHeroes().subscribe((heroes) => {
      expect(heroes).toEqual(heroService.hero$.value);
      done();
    });
  });
});