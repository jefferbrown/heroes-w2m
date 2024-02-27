import { REPOSITORY, REPOSITORY_FACTORY } from '@HERO/data/__shared/__di/repository.interface';
import { HeroModel } from '@HERO/data/hero/domain/models/hero.model';
import { HeroService } from '@HERO/data/hero/infrastructure/service/hero.service';
import { DeleteHeroUseCase } from '@HERO/data/hero/use-cases/delete-hero.usecase';
import { ConfirmationModalComponent } from '@HERO/ui/hero/components/confirmation-modal/confirmation-modal.component';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector   : 'w2m-card-hero',
  templateUrl: "./card-hero.component.html",
})
export class CardHeroComponent {
  private heroRepository = REPOSITORY_FACTORY[REPOSITORY.HERO](this._http, this._heroService) as never;

  @Input() hero: HeroModel;

  constructor(
    private _heroService : HeroService,
    private _http        : HttpClient,
    private toastr       : ToastrService,
    private _modalService: NgbModal,
    ) {
    this.hero = {} as HeroModel;
  }

  removeHero(id: string) {
    DeleteHeroUseCase(this.heroRepository, id)
    this.toastr.success('Eliminación', 'Héroe borrado correctamente');
  }

  openModal(id:string): void {
    const modal                      = this._modalService.open(ConfirmationModalComponent, { centered: true, size: 'md' });
          modal.componentInstance.id = id;

    modal.result.then(() => { }).catch((err) => {console.log("error", err)});
  }

}
