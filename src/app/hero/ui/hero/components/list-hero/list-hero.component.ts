import { REPOSITORY, REPOSITORY_FACTORY } from '@HERO/data/__shared/__di/repository.interface';
import { HeroModel } from '@HERO/data/hero/domain/models/hero.model';
import { HeroService } from '@HERO/data/hero/infrastructure/service/hero.service';
import { GetAllHeroesUseCase } from '@HERO/data/hero/use-cases/get-all-heroes.usecase';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: [],
})
export class ListHeroComponent {
  private heroRepository  = REPOSITORY_FACTORY[REPOSITORY.HERO](this._http, this._heroService) as never;

  loading     :boolean                  = true;
  hero$       : Observable<HeroModel[]> = new Observable();
  filtersHero : FormGroup               = this.fb.group({});
  textControl : FormControl             = new FormControl('', [ ]);

  constructor(
    private _heroService: HeroService,
    private _http       : HttpClient,
    private fb          : FormBuilder) { 
    this.hero$ = GetAllHeroesUseCase(this.heroRepository);
    this.filtersHero = this._createForm()

  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false; 
    }, 2000);  

    this.textControl.valueChanges
      .pipe(debounceTime(700),
      distinctUntilChanged())
      .subscribe((text) => {
        if (this.textControl.valid) {
          this._heroService.search(text)
        }
      });
  }

  private _createForm(): FormGroup {
    return new FormGroup({
      text : this.textControl, 
    })
  }


}
