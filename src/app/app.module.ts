import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MzSharedModule } from 'mz-shared';
import { MzMenuComponent } from './menu/components/mz-menu.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell as farBell, faCalendar as farCalendar, faHeart as farHeart, faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faBible, faTachometerAlt, faArrowAltCircleRight, faUser, faStar as fasStar, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { JsonViewerComponent } from './json-viewer/json-viewer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToDoListComponent } from './to-do-list/components/to-do-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToDoEditComponent } from './to-do-edit/to-do-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MzMenuComponent,
    JsonViewerComponent,
    HomeComponent,
    PageNotFoundComponent,
    ToDoListComponent,
    ToDoEditComponent
  ],
  imports: [
    AppRoutingModule,
    MzSharedModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxEditorModule,
    FlexLayoutModule,
    BrowserAnimationsModule 
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
      fasStar, 
      farStar,
      faArrowAltCircleRight,
      faArrowAltCircleLeft
    );
  }
}
