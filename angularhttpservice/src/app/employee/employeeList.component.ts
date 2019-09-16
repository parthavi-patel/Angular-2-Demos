
import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    providers: [EmployeeService]
})
export class EmployeeListComponent {

    //removing type any and replacing with employee type ( strongly type )
    employees: IEmployee[];


    selectedEmployeeCountRadioButton: string = 'All';

    constructor(private _employeeService: EmployeeService) {
    
    }

    ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(employeesData => this.employees = employeesData);
    }


    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }

    getFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        console.log("hiii")
        console.log(selectedRadioButtonValue)
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }
}

