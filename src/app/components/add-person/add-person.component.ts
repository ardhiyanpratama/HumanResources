import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/persons.model';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {

  /**
   *
   */
  constructor(private personService:PersonsService,
    private router:Router) {
  }
  newPerson: Person = {
    id:0,
    name:'',
    birthday:'',
    email:'',
    occupation:''
  }

  addPerson() {
    this.personService.addPerson(this.newPerson)
      .subscribe({
        next:(person) => {
          this.router.navigate(['persons'])
        },
        error:(response) => {
          console.log(response)
        }
      })
  }
}
