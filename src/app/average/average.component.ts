import { Component, OnInit } from '@angular/core';
import { ApartmentService } from '../core/services/apartment.service';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.scss']
})
export class AverageComponent implements OnInit {

  items: Array<any>;

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit() {
    this.apartmentService.getAverage().subscribe((i) => {
      this.items = i;
    });
  }

}
