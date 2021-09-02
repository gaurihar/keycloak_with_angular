import { APP_INITIALIZER,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { GoogleComponent } from './component/google/google.component';
import { KibanaComponent } from './component/kibana/kibana.component';
import { MenuComponent } from './component/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {KeycloakAngularModule,KeycloakService} from 'keycloak-angular'

import { initializeKeycloak } from '../app/utility/app.init'



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    GoogleComponent,
    KibanaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule ,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    NgbModule ,
    
  KeycloakAngularModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
