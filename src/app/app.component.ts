import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular5 Training';
  activeView = 'list';
  selectedEmployee;
  newEmployee: Employee = new Employee('', null);
  menuList: Array<string> = ['Home', 'About', 'Contact'];
  sectionList: Array<string> = ['HR', 'Admin', 'IT'];
  employees: Array<Employee> = [
    new Employee('Ajith', 23),
    new Employee('Rajni', 33)
  ];

  onMenuClick(item){
    alert('menu clicked is ' + item);
  }

  onSectionClick(item){
    alert('section clicked is ' + item);
  }

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

  selectView(viewName){
    this.activeView = viewName;
  }

  deleteEmployee(empIndex) {
    this.employees.splice(empIndex, 1);
  }

}
