import { TYPE_UNIVERSE } from '@HERO/data/hero/domain/models/hero.model';
import { InputHeroComponent } from '@HERO/ui/__shared/components/input-hero/input-hero.component';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { AddHeroComponent } from './add-hero.component';

describe('AddHeroComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,     
      RouterTestingModule,
      ToastrModule.forRoot(),],
 
    declarations: [AddHeroComponent,InputHeroComponent]
  }));

  it('Should be created AddHeroComponent', () => {
    const fixture = TestBed.createComponent(AddHeroComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Should form invalid', () => {
    const fixture = TestBed.createComponent(AddHeroComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()

    console.log("🚀 ~ it ~ app.formHero.controls:", app.formHero.controls)
    const name = app.formHero.controls['name']
    name.setValue('Jeffer')

    expect(app.formHero.invalid).toBeTrue();
  });

  it('Should form valid', () => {
    const fixture = TestBed.createComponent(AddHeroComponent);
    const app = fixture.componentInstance
    fixture.detectChanges() 
 
    const name = app.formHero.controls['name']
    const description = app.formHero.controls['description']
    const power = app.formHero.controls['power']
    const age = app.formHero.controls['age']
    const universe_img = app.formHero.controls['universe_img']

    name.setValue('Jeffer')
    description.setValue('Supersonico')
    power.setValue('Fuerza')
    age.setValue(12)
    universe_img.setValue(TYPE_UNIVERSE.MARVEL)

    expect(app.formHero.invalid).toBeFalse();
  });
 
});
