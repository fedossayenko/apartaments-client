import { Component, OnInit } from '@angular/core';
import { ApartmentService } from './core/services/apartment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  items: Array<any>;

  constructor(
    private apartmentService: ApartmentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.url.subscribe(url => {
      console.log(url);
    });
  }
}
