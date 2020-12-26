import { Employee } from './../../classes/Employee';
import { Component, OnInit} from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { EmployeesService } from './../../Services/employees.service';

@Component({
  selector: 'app-emptable',
  templateUrl: './emptable.component.html',
  styleUrls: ['./emptable.component.css']
})
export class EmptableComponent implements OnInit {


  table : Employee[]=new Array<Employee>();
  error:'';


  constructor(private employeeservice : EmployeesService) { }

  ngOnInit() {
    this.getData();
  }


  getData()
  {
    this.employeeservice.getEmployees().subscribe(
      res=>{
        this.table = res.data ;
        console.log(res);
        console.log(this.table)


      },
      err=>{this.error=err;
      console.log(err);
      }

    )
  }


  //sorting
  key: string = 'name'; //set default
  reverse: boolean = true;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }


  // pagination
  p: number = 1;

  ;
  public newAttribute: any = {};

    addFieldValue() {
        this.table.push(this.newAttribute)
        this.newAttribute = {};
    }

    deleteFieldValue(id) {
        for(let i = 0; i < this.table.length; ++i){
          if (this.table[i].id === id) {
              this.table.splice(i,1);
          }
      }
    }
}
