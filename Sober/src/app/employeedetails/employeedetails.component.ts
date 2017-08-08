import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
import { ADD_EMP } from '../actions';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) { }

  input = {
    id: "",
    name: "",
    phone: "",
    address: "",
    priority: "employee",
    color: "normal"
  };

  range = 0;

  changer(){
    if(this.range==0){
      this.input.priority="employee";
      this.input.color="normal";
    }
    else if(this.range==5){
      this.input.priority="manager";
      this.input.color="red";
    }
    else if(this.range==10){
      this.input.priority="CEO";
      this.input.color="orange";
    }
  }

  send(){
    console.log(this.input);
    this.ngRedux.dispatch({ type:ADD_EMP, list: this.input });
  }

  ngOnInit() {
  }

}
