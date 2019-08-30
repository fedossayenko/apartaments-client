import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { AverageComponent } from './average/average.component';
import { ChangedComponent } from './changed/changed.component';
import { DayInfoComponent } from './day-info/day-info.component';
import { DeletedComponent } from './deleted/deleted.component';
import { DuplicatesComponent } from './duplicates/duplicates.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'average',
    component: AverageComponent
  },
  {
    path: 'changed',
    component: ChangedComponent
  },
  {
    path: 'day_info',
    component: DayInfoComponent
  },
  {
    path: 'deleted',
    component: DeletedComponent
  },
  {
    path: 'duplicates',
    component: DuplicatesComponent
  },
  {
    path: 'apartment/:id',
    component: ApartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
