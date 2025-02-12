import { AfterContentInit, Component, ContentChild, Host, OnInit,  } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers:[RoomsService]
})
export class ContainerComponent implements OnInit,AfterContentInit {


    @ContentChild (EmployeeComponent) emplyoee! : EmployeeComponent;

  constructor(@Host() private roomsService : RoomsService){}

  ngOnInit(): void {
      
  }
  ngAfterContentInit(): void {

    console.log(this.emplyoee);
    this.emplyoee.empName = 'ALAN MAN';
      
  }
}
