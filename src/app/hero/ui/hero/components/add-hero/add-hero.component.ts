import { REPOSITORY, REPOSITORY_FACTORY } from '@HERO/data/__shared/__di/repository.interface';
import { HeroModel, TYPE_UNIVERSE } from '@HERO/data/hero/domain/models/hero.model';
import { HeroService } from '@HERO/data/hero/infrastructure/service/hero.service';
import { CreateHeroUseCase } from '@HERO/data/hero/use-cases/create-hero.usecase';
import { GetByIdHeroUseCase } from '@HERO/data/hero/use-cases/get-by-id-hero.usecase';
import { UpdateHeroUseCase } from '@HERO/data/hero/use-cases/update-hero.usecase';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector       : 'app-add-hero',
  templateUrl    : './add-hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddHeroComponent {
  private heroRepository = REPOSITORY_FACTORY[REPOSITORY.HERO](this._http, this._heroService) as never;

  id  : string = '';
  hero: HeroModel | undefined;

  formHero: FormGroup = this.fb.group({});

  idControl           : FormControl = new FormControl(uuidv4(), Validators.required);
  nameControl         : FormControl = new FormControl('', [Validators.required]);
  descriptionControl  : FormControl = new FormControl('', [Validators.required]);
  powerControl        : FormControl = new FormControl('', [Validators.required]);
  ageControl          : FormControl = new FormControl('0', [Validators.required, Validators.min(1)]);
  universe_imgControl: FormControl  = new FormControl(TYPE_UNIVERSE.MARVEL, [Validators.required]);

  constructor(
    private _http       : HttpClient,
    private fb          : FormBuilder,
    private _router     : Router,
    private _route      : ActivatedRoute,
    private _heroService: HeroService,
    private toastr      : ToastrService
  ) {
    this.formHero = this._createForm()
  }

  async ngOnInit(): Promise<void> {

    const { id } = this._route.snapshot.params;
    this.id      = id
    if (this.id) {
      this.hero = await GetByIdHeroUseCase(this.heroRepository, this.id);
      if (!this.hero) {
        this.toastr.error('Error', 'Héroe no encontrado');
        this._router.navigate(['']);
      } else {
        this._setValues(this.hero);
      }
    }
  }


  addHero() {
    if (this.formHero.valid) {
      CreateHeroUseCase(this.heroRepository, this.formHero.value)
      this.toastr.success('Creación', 'Héroe creado correctamente');
      this._router.navigate(['']);
    }
  }

  editHero() {
    if (this.formHero.valid) {
      UpdateHeroUseCase(this.heroRepository, this.formHero.value)
      this.toastr.success('Edición', 'Héroe actualizado correctamente');
      this._router.navigate(['']);
    }
  }

  private _createForm(): FormGroup {
    return new FormGroup({
      id          : this.idControl,
      name        : this.nameControl,
      description : this.descriptionControl,
      power       : this.powerControl,
      age         : this.ageControl,
      universe_img: this.universe_imgControl,
    })
  }

  private _setValues(heroData: HeroModel | undefined): void {
    if (!heroData) return;

    this.idControl.setValue(heroData.id)
    this.nameControl.setValue(heroData.name)
    this.descriptionControl.setValue(heroData.description)
    this.powerControl.setValue(heroData.power)
    this.ageControl.setValue(heroData.age)
    this.universe_imgControl.setValue(heroData.universe_img)
  }
}
