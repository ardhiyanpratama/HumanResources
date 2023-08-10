import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PersonsService } from 'src/app/services/persons.service';
import { Person } from 'src/app/models/persons.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  persons:Person[] = [];

  constructor(private personService:PersonsService, private route:Router){}

  ngOnInit(): void {
    const localData = localStorage.getItem('personList');
    if (localData != null) {
      this.persons = JSON.parse(localData);
      console.log("main", this.persons)
    }
    else{
      this.personService.getAllPersons()
      .subscribe({
        next:(persons)=>{
          this.persons = persons;
          localStorage.setItem('personList', JSON.stringify(persons));
          console.log("main data", this.persons)
        },
        error:(response)=>{
          console.log(response);
        }
      })
    }
  }

}
