import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeCountComponent } from './employee/employeeCount.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';


@NgModule({
    imports: [BrowserModule,FormsModule,HttpModule],
    declarations: [AppComponent, EmployeeListComponent, EmployeeCountComponent,EmployeeTitlePipe],
    bootstrap: [AppComponent]
})
export class AppModule { }

