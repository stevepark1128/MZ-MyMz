import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MzSharedModule } from 'mz-shared';
import { MzMenuComponent } from './menu/components/mz-menu.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell as farBell, faCalendar as farCalendar, faHeart as farHeart, faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faBible, faTachometerAlt, faUser, faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MzMenuComponent
  ],
  imports: [
    AppRoutingModule,
    MzSharedModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      farBell,
      faBible,
      farCalendar,
      farHeart,
      faUser,
      faTachometerAlt,
      fasStar, farStar
    );
  }
}
