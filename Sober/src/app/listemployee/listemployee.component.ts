import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState,INITIAL_STATE,rootReducer } from '../store';
import { REMOVE_EMP } from '../actions';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {

  list = [];

  constructor(private ngRedux: NgRedux<IAppState>) { 
    ngRedux.subscribe(() => {
      this.list = ngRedux.getState().list;
    })
  }

  remove(id){
    console.log("here");
    this.ngRedux.dispatch({ type: REMOVE_EMP, id: id });
  }

  ngOnInit() {
  }

}
