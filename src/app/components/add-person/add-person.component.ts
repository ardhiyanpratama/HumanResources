import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/persons.model';
import { PersonsService } from 'src/app/services/persons.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    birthday: new FormControl(''),
    email: new FormControl(''),
    occupation: new FormControl(''),
  });
  submitted = false;
  /**
   *
   */
  constructor(private personService:PersonsService,
    private router:Router,
    private formBuilder:FormBuilder) {
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        birthday: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        occupation: ['', Validators.required]
      },
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  newPerson: Person = {
    id:0,
    name:'',
    birthday:'',
    email:'',
    occupation:''
  }

  addPerson() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.personService
      .addPerson(this.form.value as Person)
      .subscribe(()=>{
        this.router.navigate(['persons'])
      });
  }
}
