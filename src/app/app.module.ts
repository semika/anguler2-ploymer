import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { PolymerElement } from '@vaadin/angular2-polymer'; 

// Application components
import { AppComponent } from './app.component';
import { HeroDetailComponent} from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

//Application services
import { HeroService} from './hero.service';

//Application modules
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [ // component goes here...
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    PolymerElement('px-spinner')
  ],
  imports: [ //Angular modules goes here.. 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule 
  ],
  providers: [HeroService], ///services goes here.
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
