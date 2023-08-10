import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Person } from '../models/persons.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  persons:Person[]=[];
  private status = new Subject<boolean>();
  url: string = '/assets/persons.json';

  constructor(private http:HttpClient) { }

  //Get Init Person From Json File
  getAllPersons(): Observable<Person[]>{
    localStorage.clear();
    return this.http.get<Person[]>(this.url);
  }

  addPerson(newPerson:Person): Observable<boolean>{
    this.persons = JSON.parse(localStorage.getItem('personList')!);
    console.log("localdata", this.persons)
    newPerson.id = this.persons.length + 1;
    this.persons.push(newPerson);
    console.log("push data", this.persons)

    localStorage.setItem('personList', JSON.stringify(this.persons));

    return this.status.asObservable();
  }
}
