import { HeroService } from '@HERO/data/hero/infrastructure/service/hero.service';
import { CardHeroComponent } from '@HERO/ui/__shared/components/card-hero/card-hero.component';
import { InputHeroComponent } from '@HERO/ui/__shared/components/input-hero/input-hero.component';
import { AddHeroComponent } from '@HERO/ui/hero/components/add-hero/add-hero.component';
import { ConfirmationModalComponent } from '@HERO/ui/hero/components/confirmation-modal/confirmation-modal.component';
import { ListHeroComponent } from '@HERO/ui/hero/components/list-hero/list-hero.component';
import { HeroComponent } from '@HERO/ui/hero/pages/hero.component';
import { AppComponent } from '@HERO/ui/layout/app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, 
    HeroComponent, 
    AddHeroComponent, 
    ListHeroComponent,
    InputHeroComponent,
    CardHeroComponent,
    ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, 
    NgbModule,    
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
