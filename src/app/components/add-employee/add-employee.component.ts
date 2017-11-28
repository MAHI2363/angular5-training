import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild('addForm')
  myForm: NgForm;

  @Output()
  onSubmit: EventEmitter<Employee>  = new EventEmitter<Employee>();

  newEmployee: Employee = new Employee('', null);
  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    if(this.myForm.valid){
      this.onSubmit.emit(this.myForm.value);
      this.myForm.reset();
    }
    
  }

}
