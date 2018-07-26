import {Component, OnInit, ViewChild} from '@angular/core';
import {AreasService} from '@core/services/areas.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  @ViewChild('form') private form;

  constructor(public areasService: AreasService) {

  }

  ngOnInit() {

  }

// GLOBAL

  public defineName() {
    if (this.areasService.item.id) {
      return 'EDIT AREA';
    }
    else {
      return 'NEW AREA';
    }
  }

// ACTIONS

  public submitButton() {
    if (this.form.valid) {
      if (this.areasService.item.id) {
        this.changeButton();
      }
      else {
        this.applyButton();
      }
    }
  }

  public applyButton() {
    this.areasService.createItem().subscribe(null, null, () => {
        this.moveBackButton();
      }
    );
  }

  public changeButton() {
    this.areasService.changeItem().subscribe(null, null, () => {
        this.moveBackButton();
      }
    );
  }

  public deleteButton() {
    this.areasService.deleteItem().subscribe(null, null, () => {
        this.moveBackButton();
      }
    );
  }

  public moveBackButton() {
    this.areasService.goToTable();
  }

}
