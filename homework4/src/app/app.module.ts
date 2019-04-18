import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WeathersService} from './weathers.service';
import { UsersComponent } from './users/users.component';

import { RouterModule, Routes } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserProfileComponent } from './user-profile/user-profile.component';

const appRoutes: Routes = [
  {path: 'users', component: UsersComponent, children: [
      {path: 'profile', component: UserProfileComponent}
    ]},
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WeathersService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
