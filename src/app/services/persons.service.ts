import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/persons.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  url: string = '/assets/persons.json';

  constructor(private http:HttpClient) { }

  //Get Init Person From Json File
  getAllPersons(): Observable<Person[]>{
    return this.http.get<Person[]>(this.url);
  }

  addPerson(newPerson:Person): Observable<Person>{
    const personTemp = []
    const localData = localStorage.getItem('personList');
    personTemp.push(localData);
    newPerson.id = personTemp.length + 1;
    personTemp.push(newPerson);

    localStorage.setItem('personList', JSON.stringify(personTemp));

    return personTemp;
  }
}
