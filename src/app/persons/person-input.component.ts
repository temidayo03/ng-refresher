import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-person-input',
  styleUrls: ['./person-input-component.css'],
  templateUrl: './person-input.component.html',
})

export class PersonInputComponent {
  enteredPersonName = '';
  constructor(private personsService: PersonsService) {

  }


  onCreatePerson() {
    console.log("Create a Person :" + this.enteredPersonName);
    this.personsService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
