import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgRedux, NgReduxModule } from 'ng2-redux';

import { AppComponent } from './app.component';
import { IAppState, INITIAL_STATE,rootReducer } from './store';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeedetailsComponent,
    ListemployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(ngRedux: NgRedux<IAppState>) {
      ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
 }
