import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ApartmentService } from '../core/services/apartment.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { YandexMapModule } from 'angular8-yandex-maps';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ApartmentComponent implements OnInit, OnDestroy {

  item: any;
  private routeSub: Subscription;

  public mapState: YandexMapModule.IYandexMapState = {
    center: [60.169931, 24.938513],
    zoom: 16
  };

  public mapOptions: YandexMapModule.IYandexMapOptions = {
    maxZoom: 16
  };

  constructor(private route: ActivatedRoute,
              private apartmentService: ApartmentService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.apartmentService.getApartment(params['id']).subscribe((item) => {
        this.item = item;
        this.mapState.center = [item.location_latitude, item.location_longitude];
      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
