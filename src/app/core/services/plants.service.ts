import {Injectable} from '@angular/core';
import {ApiService} from '@core/services/api.service';
import {PlantsInterface} from '@core/interfaces/plants';
import {SpinnerService} from '@core/services/spinner.service';
import {UIRouter} from '@uirouter/angular';

@Injectable()
export class PlantsService {

  public items: PlantsInterface[];

  public item = {} as PlantsInterface;

  constructor(private apiService: ApiService, private spinnerService: SpinnerService, private router: UIRouter) {

  }

  public getAllItems() {
    return this.apiService.get('/Plants', null).subscribe((res: PlantsInterface[]) => {
      this.items = res;
    });
  }

  public getItem(id) {
    this.spinnerService.display(true);
    return this.apiService.get('/Plants/' + id, null).toPromise().then((res: PlantsInterface) => {
      this.item = res;
    });
  }

  public createItem() {
    this.spinnerService.display(true);
    return this.apiService.post('/Plants', this.item, null);
  }

  public changeItem() {
    this.spinnerService.display(true);
    return this.apiService.put('/Plants/' + this.item.id, this.item, null);
  }

  public deleteItem() {
    this.spinnerService.display(true);
    return this.apiService.delete('/Plants/' + this.item.id);
  }

  // HELPERS

  public goToTable() {
    this.router.stateService.go('plants', {}, {reload: true});
  }

  public clearItem() {
    this.item = {} as PlantsInterface;
  }

}
