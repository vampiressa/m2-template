import {Injectable} from '@angular/core';
import {ApiService} from '@core/services/api.service';
import {PlantsInterface} from '@core/interfaces/plants';
import {SpinnerService} from '@core/services/spinner.service';
import {UIRouter} from '@uirouter/angular';

@Injectable()
export class PlantsService {

  public currentPage = 1;

  public items = [] as PlantsInterface[];

  public item = {} as PlantsInterface;

  constructor(private apiService: ApiService, private spinnerService: SpinnerService, private router: UIRouter) {

  }

  public getAllItems() {
    return this.apiService.get('/Plants', {page: this.currentPage, pageSize: 10}).subscribe((res: PlantsInterface[]) => {
      this.items = this.items.concat(res);
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
    this.clearItems();
    this.router.stateService.go('plants', {}, {reload: true});
  }

  public clearItems() {
    this.currentPage = 1;
    this.items = [] as PlantsInterface[];
  }

  public clearItem() {
    this.item = {} as PlantsInterface;
  }

}
