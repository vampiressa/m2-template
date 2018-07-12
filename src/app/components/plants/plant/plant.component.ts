import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {

  @Input() public data: object;

  public alertName = 'NEW PLANT';


  constructor() {

  }

  ngOnInit() {
    // if (this.data.id) {
    //   this.alertName = 'EDIT PLANT';
    // }
  }

}
