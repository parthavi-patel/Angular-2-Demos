import { Component } from '@angular/core';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
})
export class EmployeeListComponent {
    employees: any[];


    selectedEmployeeCountRadioButton: string = 'All';

    constructor() {
        this.employees = [
            {
                code: '1', name: 'Test1', gender: 'Male',
                annualSalary: 1000, dateOfBirth: '24/07/1993'
            },
            {
                code: '2', name: 'Test2', gender: 'Male',
                annualSalary: 2000, dateOfBirth: '11/12/1992'
            },
            {
                code: '3', name: 'Test3', gender: 'Male',
                annualSalary: 3000, dateOfBirth: '04/08/1996'
            },
            {
                code: '4', name: 'Test4', gender: 'Female',
                annualSalary: 4000, dateOfBirth: '09/12/1991'
            },
        ];
    }

    getEmployees(): void {
        this.employees = [
            {
                code: '1', name: 'Test1', gender: 'Male',
                annualSalary: 1000, dateOfBirth: '24/07/1993'
            },
            {
                code: '2', name: 'Test2', gender: 'Male',
                annualSalary: 2000, dateOfBirth: '11/12/1992'
            },
            {
                code: '3', name: 'Test3', gender: 'Male',
                annualSalary: 3000, dateOfBirth: '04/08/1996'
            },
            {
                code: '4', name: 'Test4', gender: 'Female',
                annualSalary: 4000, dateOfBirth: '09/12/1991'
            },
            {
                code: '5', name: 'Test5', gender: 'Female',
                annualSalary: 5000, dateOfBirth: '26/05/1994'
            },
            {
                code: '6', name: 'Test6', gender: 'Female',
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

