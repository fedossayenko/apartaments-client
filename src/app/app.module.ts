import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {

  SharedModule
} from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatListModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AverageComponent } from './average/average.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { ChangedComponent } from './changed/changed.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, AverageComponent, ApartmentComponent, ChangedComponent],
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
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
