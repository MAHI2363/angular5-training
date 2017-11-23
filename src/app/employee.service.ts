import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Employee } from './models/employee';

@Injectable()
export class EmployeeService {

    constructor(private http: HttpClient){

    }

    getEmployees(){

        return this.http
                        .get('/assets/employees.json')
                        .map((employees: Array<Employee>) => {
                            employees.push({
                                name: 'Rajnikanth',
                                age: 30
                            });
                            return employees;
                        });
    }
}