import {Component, OnInit, ViewChild} from '@angular/core';
import {PlantsService} from '@core/services/plants.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {

  @ViewChild('form') private form;

  constructor(public plantsService: PlantsService) {

  }

  ngOnInit() {

  }

// GLOBAL

  public defineName() {
    if (this.plantsService.item.id) {
      return 'EDIT PLANT';
    }
    else {
      return 'NEW PLANT';
    }
  }

// ACTIONS

  public submitButton() {
    if (this.form.valid) {
      if (this.plantsService.item.id) {
        this.changeButton();
      }
      else {
        this.applyButton();
      }
    }
  }

  public applyButton() {
    this.plantsService.createItem().subscribe(null, null, () => {
        this.moveBackButton();
      }
    );
  }

  public changeButton() {
    this.plantsService.changeItem().subscribe(null, null, () => {
        this.moveBackButton();
      }
    );
  }

  public deleteButton() {
    this.plantsService.deleteItem().subscribe(null, null, () => {
        this.moveBackButton();
      }
    );
  }

  public moveBackButton() {
    this.plantsService.goToTable();
  }

}
