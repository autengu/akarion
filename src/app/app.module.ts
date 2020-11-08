import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RolesComponent} from './roles/roles.component';
import {PermissionsComponent} from './permissions/permissions.component';

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    PermissionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
