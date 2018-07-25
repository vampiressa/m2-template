import {Injectable} from '@angular/core';
import {ApiService} from '@core/services/api.service';
import {PlantsInterface} from '@core/interfaces/plants';
import {SpinnerService} from '@core/services/spinner.service';

@Injectable()
export class PlantsService {

  public plants: PlantsInterface[];

  public plant = {} as PlantsInterface;

  constructor(private apiService: ApiService, private spinnerService: SpinnerService) {

  }

  public getAllPlants() {
    return this.apiService.get('/Plants', null).subscribe((res: PlantsInterface[]) => {
      this.plants = res;
    });
  }

  public getPlant(id) {
    this.spinnerService.display(true);
    return this.apiService.get('/Plants/' + id, null).toPromise().then((res: PlantsInterface) => {
      this.plant = res;
    });
  }

  public createPlant() {
    this.spinnerService.display(true);
    return this.apiService.post('/Plants', this.plant, null);
  }

  public changePlant() {
    this.spinnerService.display(true);
    return this.apiService.put('/Plants/' + this.plant.id, this.plant, null);
  }

  public deletePlant() {
    this.spinnerService.display(true);
    return this.apiService.delete('/Plants/' + this.plant.id);
  }

}
