import { AfterContentInit, Component, ContentChild, OnInit,  } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit,AfterContentInit {


    @ContentChild (EmployeeComponent) emplyoee! : EmployeeComponent;

  constructor(){}

  ngOnInit(): void {
      
  }
  ngAfterContentInit(): void {

    console.log(this.emplyoee);
    this.emplyoee.empName = 'ALAN MAN';
      
  }
}
