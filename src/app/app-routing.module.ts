import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHeroComponent } from './hero/ui/hero/components/add-hero/add-hero.component';
import { HeroComponent } from './hero/ui/hero/pages/hero.component';
import { AppComponent } from './hero/ui/layout/app.component';


const enum PATH_HEROES {
  HOME   = '',
  ADD    = 'add',
  EDIT   = 'edit/:id',
}

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: PATH_HEROES.HOME, component: HeroComponent },
      { path: PATH_HEROES.ADD, component: AddHeroComponent },
      { path: PATH_HEROES.EDIT, component: AddHeroComponent },
      { path: '', pathMatch: 'full', redirectTo: PATH_HEROES.HOME },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
