import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {

  empName: string = 'Johnmathew';
  constructor(private roomsService:RoomsService){}
  ngOnInit(): void {
      
  }
}
