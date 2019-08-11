import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApartmentService } from '../core/services/apartment.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss']
})
export class ApartmentComponent implements OnInit, OnDestroy {

  item: any;
  private routeSub: Subscription;

  constructor(private route: ActivatedRoute,
              private apartmentService: ApartmentService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.apartmentService.getApartment(params['id']).subscribe((item) => {
        this.item = item;
      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
