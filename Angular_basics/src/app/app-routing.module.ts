import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SingleComponent } from './single/single.component';
// import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  // { path: 'heroes', component: HeroesComponent }
  { path: 'bindlink', component: SingleComponent},
  { path:'formlink', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }