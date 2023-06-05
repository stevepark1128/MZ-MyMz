import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { JsonViewerComponent } from './json-viewer/json-viewer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToDoListComponent } from './to-do-list/components/to-do-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'json-viewer',
        component: JsonViewerComponent
      },
      {
        path: 'to-do-list',
        component: ToDoListComponent
      },
    ]
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
