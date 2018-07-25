import {Component, OnInit, ViewChild} from '@angular/core';
import {PlantsService} from '@core/services/plants.service';
import {UIRouter} from '@uirouter/angular';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {

  @ViewChild('form') private form;

  constructor(public plantsService: PlantsService, private router: UIRouter) {

  }

  ngOnInit() {

  }

// GLOBAL

  public defineName() {
    if (this.plantsService.plant.id) {
      return 'EDIT PLANT';
    }
    else {
      return 'NEW PLANT';
    }
  }

// ACTIONS

  public submitButton() {
    if (this.form.valid) {
      if (this.plantsService.plant.id) {
        this.changeButton();
      }
      else {
        this.applyButton();
      }
    }
  }

  public applyButton() {
    this.plantsService.createPlant().subscribe(null, null, () => {
        this.moveBackButton();
      }
    );
  }

  public changeButton() {
    this.plantsService.changePlant().subscribe(null, null, () => {
        this.moveBackButton();
      }
    );
  }

  public deleteButton() {
    this.plantsService.deletePlant().subscribe(null, null, () => {
        this.moveBackButton();
      }
    );
  }

  public moveBackButton() {
    this.router.stateService.go('plants', {}, {reload: true});
  }

}
