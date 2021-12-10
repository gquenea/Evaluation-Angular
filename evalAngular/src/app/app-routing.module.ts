import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UneStatComponent } from './une-stat/une-stat.component';
import { CreationStatComponent } from './creation-stat/creation-stat.component';
import { ListeStatComponent } from './liste-stat/liste-stat.component';

const routes: Routes = [
  { path: 'app-une-stat', component: UneStatComponent },
  { path: 'app-creation-stat', component: CreationStatComponent },
  { path: 'app-liste-stat', component: ListeStatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
