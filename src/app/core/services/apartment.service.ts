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
  get(offset?: number, changed?: boolean, dupl?: boolean) {
    return this.apiService.get('/last-apartments' + (changed ? '-changed' : '') + (dupl ? '-dupl' : '') + (offset ? '?offset=' + offset : ''))
      .pipe(map((items: Array<any>) => {
        const w = JSON.parse(localStorage.getItem('watched')) || {};
        items.forEach((item) => {
          item.watched = !!w[item.site_id];
          if (item.watched) {
            item.changed = w[item.site_id] < item.date_update;
          }
          (item['prices'] || []).forEach((price, i) => {
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

  getDeleted(offset?: number) {
    return this.apiService.get('/deleted' + (offset ? '?offset=' + offset : ''))
      .pipe(map((items: Array<any>) => {
        const w = JSON.parse(localStorage.getItem('watched')) || {};
        items.forEach((item) => {
          item.watched = !!w[item.site_id];
          if (item.watched) {
            item.changed = w[item.site_id] < item.date_update;
          }
          item.price = item.prices ? item.prices[0] : {};
        });
        return items;
      }));
  }

  getDayInfo() {
    return this.apiService.get('/day_info');
  }
}
