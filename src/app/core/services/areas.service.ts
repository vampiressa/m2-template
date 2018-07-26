import {Injectable} from '@angular/core';
import {ApiService} from '@core/services/api.service';
import {SpinnerService} from '@core/services/spinner.service';
import {AreasInterface} from '@core/interfaces/areas';
import {UIRouter} from '@uirouter/angular';

@Injectable()
export class AreasService {

  public items: AreasInterface[];

  public item = {} as AreasInterface;

  constructor(private apiService: ApiService, private spinnerService: SpinnerService, private router: UIRouter) {

  }

// METHODS

  public getAllItems() {
    return this.apiService.get('/Areas', null).subscribe((res: AreasInterface[]) => {
      this.items = res;
    });
  }

  public getItem(id) {
    this.spinnerService.display(true);
    return this.apiService.get('/Areas/' + id, null).toPromise().then((res: AreasInterface) => {
      this.item = res;
    });
  }

  public getItemsByPlant(id) {
    this.spinnerService.display(true);
    return this.apiService.get('/Areas/GetByPlant/' + id, null).toPromise().then((res: AreasInterface) => {
      this.item = res;
    });
  }

  public createItem() {
    this.spinnerService.display(true);
    return this.apiService.post('/Areas', this.item, null);
  }

  public changeItem() {
    this.spinnerService.display(true);
    return this.apiService.put('/Areas/' + this.item.id, this.item, null);
  }

  public deleteItem() {
    this.spinnerService.display(true);
    return this.apiService.delete('/Areas/' + this.item.id);
  }

// HELPERS

  public goToTable() {
    this.router.stateService.go('plants.area', {}, {reload: true});
  }

  public clearItem() {
    this.item = {};
  }

}
