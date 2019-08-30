import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AverageComponent } from './average/average.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { ChangedComponent } from './changed/changed.component';
import { DayInfoComponent } from './day-info/day-info.component';
import { DeletedComponent } from './deleted/deleted.component';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { DuplicatesComponent } from './duplicates/duplicates.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, AverageComponent, ApartmentComponent, ChangedComponent, DayInfoComponent, DeletedComponent, DuplicatesComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    AngularYandexMapsModule.forRoot('976d2f7f-0d96-495b-b325-0a833dd058df')
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
