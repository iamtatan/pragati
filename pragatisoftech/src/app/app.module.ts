import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule,MatCardModule  } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import{ MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Ng2CarouselamosModule } from '../../node_modules/ng2-carouselamos';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HOMEComponent } from './components/home/home.component';
import { DevelopedComponent } from './components/developed/developed.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HOMEComponent,
    DevelopedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
