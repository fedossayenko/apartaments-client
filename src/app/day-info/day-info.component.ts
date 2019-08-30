import { Component, OnInit } from '@angular/core';
import { ApartmentService } from '../core/services/apartment.service';

@Component({
  selector: 'app-day-info',
  templateUrl: './day-info.component.html',
  styleUrls: ['./day-info.component.scss']
})
export class DayInfoComponent implements OnInit {
  dataSource = null;
  displayedColumns: string[] = ['date_create', 'created', 'updated', 'deleted', 'all_count', 'per_meter', 'amount'];

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit() {
    this.apartmentService.getDayInfo().subscribe((response) => {
      this.dataSource = response;
    });
  }

}
