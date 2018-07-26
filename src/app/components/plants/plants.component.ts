import {Component, OnInit} from '@angular/core';
import {PlantsService} from '@core/services/plants.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {

  constructor(public plantsService: PlantsService) {
    this.plantsService.getAllItems();
  }

  ngOnInit() {
  }

}
