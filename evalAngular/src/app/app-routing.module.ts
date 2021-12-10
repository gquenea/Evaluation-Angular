import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UneStatComponent } from './une-stat/une-stat.component';

const routes: Routes = [{ path: 'app-une-stat', component: UneStatComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
