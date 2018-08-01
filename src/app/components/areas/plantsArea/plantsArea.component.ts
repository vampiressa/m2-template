import {Component, OnInit} from '@angular/core';
import {AreasService} from '@core/services/areas.service';

@Component({
  selector: 'app-plants-area',
  templateUrl: './plantsArea.component.html',
  styleUrls: ['./plantsArea.component.scss']
})
export class PlantsAreaComponent implements OnInit {

  constructor(public areasService: AreasService) {
    this.areasService.getItemsByPlant();
  }

  ngOnInit() {
  }

  public onScroll() {
    this.areasService.currentPage++;
    this.areasService.getItemsByPlant();
  }

}
