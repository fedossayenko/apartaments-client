import { Component, OnInit } from '@angular/core';
import { ApartmentService } from '../core/services/apartment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items: Array<any>;
  offset = 0;
  isLoading: boolean;

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit() {
    console.log('!!');
    // this.userService.populate()
    this.apartmentService.get().subscribe((data) => {
      this.items = data;
    });
  }

  loadmore(){
    this.offset++;
    this.isLoading = true;
    this.apartmentService.get(this.offset).subscribe((data) => {
      this.items = [...this.items, ...data];
      this.isLoading = false;
    });
  }

}
