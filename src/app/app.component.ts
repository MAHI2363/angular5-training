import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular5 Training';
  selectedEmployee;
  newEmployee: Employee = new Employee('', null);
  employees: Array<Employee> = [
    new Employee('Ajith', 23),
    new Employee('Rajni', 33)
  ];

  clearSelections() {
    this.employees.forEach(emp => emp.selected = false);
  }

  onSelectEmployee(employee: Employee) {
    this.clearSelections();
    employee.selected = true;
    this.selectedEmployee = employee;
  }

  addEmployee() {
    this.employees.push(this.newEmployee);
  }

}
