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
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackComponent } from './components/contact/feedback/feedback.component';
import { MapComponent } from './components/contact/map/map.component';
import { FooterComponent } from './components/contact/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { InternshipComponent } from './components/internship/internship.component';
import { WeComponent } from './components/services/we/we.component';
import { WedevelopItemeComponent } from './components/services/we/wedevelop-iteme/wedevelop-iteme.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HOMEComponent,
    DevelopedComponent,
    ContactComponent,
    FeedbackComponent,
    MapComponent,
    FooterComponent,
    ServicesComponent,
    InternshipComponent,
    WeComponent,
    WedevelopItemeComponent
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
    Ng2CarouselamosModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAXvfpwGiZtv791_NVz4-zYLkDh3-tlx3o'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
