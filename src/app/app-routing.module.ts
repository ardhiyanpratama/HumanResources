import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './components/persons/persons.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PersonsComponent
  },
  {
    path: 'persons',
    component: PersonsComponent
  },
  {
    path: 'persons/add',
    component: AddPersonComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
