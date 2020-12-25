import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Employee } from './../classes/Employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employee :Employee[];

constructor(private httpModule :HttpClient) { }

getEmployees():Observable<any>{
  return this.httpModule.get('http://dummy.restapiexample.com/api/v1/employees');

}

}
