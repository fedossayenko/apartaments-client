import { Component, OnInit } from '@angular/core'

import { UserService } from './core'
import { ApartmentService } from './core/services/apartment.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  items: Array<any>;
  constructor(
    private apartmentService: ApartmentService
  ) {}

  ngOnInit() {
    // this.userService.populate()
    this.apartmentService.get().subscribe((data) => {
      this.items = data;
    });
  }
}
