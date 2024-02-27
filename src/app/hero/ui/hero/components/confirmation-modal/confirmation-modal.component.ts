import { REPOSITORY, REPOSITORY_FACTORY } from '@HERO/data/__shared/__di/repository.interface';
import { HeroService } from '@HERO/data/hero/infrastructure/service/hero.service';
import { DeleteHeroUseCase } from '@HERO/data/hero/use-cases/delete-hero.usecase';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl:'./confirmation-modal.component.html', 
})
export class ConfirmationModalComponent { 
  private heroRepository = REPOSITORY_FACTORY[REPOSITORY.HERO](this._http, this._heroService) as never;

  @Input() id: string='';

  constructor(private _heroService: HeroService,
    private _http      : HttpClient,
    private toastr     : ToastrService,
    public  activeModal: NgbActiveModal,

    ) { 
  }

  removeHero(id:string) {
    DeleteHeroUseCase(this.heroRepository, id)
    this.toastr.success('Eliminación', 'Héroe borrado correctamente');
    this.activeModal.close()
  }

 

}
