import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsComponent } from './components/persons/persons.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { AgePipe } from './pipe/age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    AddPersonComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
