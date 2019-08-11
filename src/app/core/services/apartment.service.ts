import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  constructor(
    private apiService: ApiService
  ) {}

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  get(offset?: number, changed?: boolean) {
    return this.apiService.get('/last-apartments' + (changed ? '-changed' : '') + (offset ? '?offset=' + offset : ''))
      .pipe(map((data: Array<any>) => {
        const w = JSON.parse(localStorage.getItem('watched')) || {};
        const items = data.filter((app) => {
          return app.number_of_rooms === 2 || app.number_of_rooms === 3;
        });
        items.forEach((item) => {
          item.watched = !!w[item.site_id];
          if (item.watched) {
            item.changed = w[item.site_id] < item.date_update;
          }
          item['prices'].forEach((price, i) => {
            if (price.is_active) {
              item.price = price;
            }
          });
        });
        return items;
      }));
  }

  getApartment(id) {
    return this.apiService.get('/apartment/' + id).pipe(map((item) => {
        const w = JSON.parse(localStorage.getItem('watched')) || {};
        w[id] = new Date();
        localStorage.setItem('watched', JSON.stringify(w));

        item['prices'].forEach((price, i) => {
          if (item['prices'][i + 1]) {
            if (price.price_amount > item['prices'][i + 1].price_amount) {
              price.isUp = true;
            } else {
              price.isDown = true;
            }
          }
        });

        return item;
      }));
  }

  getAverage() {
    return this.apiService.get('/average');
  }
}
