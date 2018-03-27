import { Component, OnInit } from '@angular/core';

import {EmployeeService} from '../shared/employee.service';
import {Employee} from '../shared/employee.model';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList : Employee[];
  constructor(private employeeService : EmployeeService,private tostr : ToastrService) { }

  ngOnInit() {
    var x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element =>{
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.employeeList.push(y as Employee);
      });
    });
  }

  onEdit(emp : Employee){
    this.employeeService.selectedEmployee = Object.assign({},emp); //Object.assign({},emp) makes it so that as you are editing an employees information in the form, their information inside the list component doesnt change realtime
  }

  onDelete(key : string){
    if (confirm('Are you sure you wish to delete this record?') == true){
      this.employeeService.deleteEmployee(key);
      this.tostr.warning("Deleted Successfully", "Employee Register");
    }
  }

}
