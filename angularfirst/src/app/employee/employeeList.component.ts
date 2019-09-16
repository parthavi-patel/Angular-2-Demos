import { Component } from '@angular/core';
import { IEmployee } from './employee';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
})
export class EmployeeListComponent {

    //removing type any and replacing with employee type ( strongly type )
    employees: IEmployee[];

    selectedEmployeeCountRadioButton: string = 'All';

    constructor() {
        this.employees = [
            {
                code: '1', name: 'Oliver', gender: 'Male',
                annualSalary: 1000, dateOfBirth: '24/07/1993'
            },
            {
                code: '2', name: 'Harry', gender: 'Male',
                annualSalary: 2000, dateOfBirth: '11/12/1992'
            },
            {
                code: '3', name: 'Jacob', gender: 'Male',
                annualSalary: 3000, dateOfBirth: '04/08/1996'
            },
            {
                code: '4', name: 'Lily', gender: 'Female',
                annualSalary: 4000, dateOfBirth: '09/12/1991'
            },
        ];
    }

    getEmployees(): void {
        this.employees = [
            {
                code: '1', name: 'Oliver', gender: 'Male',
                annualSalary: 1000, dateOfBirth: '24/07/1993'
            },
            {
                code: '2', name: 'Harry', gender: 'Male',
                annualSalary: 2000, dateOfBirth: '11/12/1992'
            },
            {
                code: '3', name: 'Jacob', gender: 'Male',
                annualSalary: 3000, dateOfBirth: '04/08/1996'
            },
            {
                code: '4', name: 'Lily', gender: 'Female',
                annualSalary: 4000, dateOfBirth: '09/12/1991'
            },
            {
                code: '5', name: 'Amelia', gender: 'Female',
                annualSalary: 5000, dateOfBirth: '26/05/1994'
            },
            {
                code: '6', name: 'Sophia', gender: 'Female',
                annualSalary: 6000, dateOfBirth: '10/03/1995'
            },
        ];
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

