import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

import {Routes,RouterModule} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
const routes: Routes = [
  {
    path: '',
    component:HomePageComponent
  },
  {
    path: 'items',
    component: ListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
