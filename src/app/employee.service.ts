import { Employee } from './models/employee';

export class EmployeeService {
    private employees: Array<Employee> = [
        new Employee('Ajith', 23),
        new Employee('Rajni', 33)
    ];
    getEmployees(){
        return this.employees;
    }
}