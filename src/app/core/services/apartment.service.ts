import { Injectable } from '@angular/core';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(
    private apiService: ApiService
  ) {}

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  get() {
    // If JWT detected, attempt to get & store user's info
    return this.apiService.get('/last-apartments');
  }

}
