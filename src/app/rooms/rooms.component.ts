import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit ,DoCheck,AfterViewInit ,AfterViewChecked { 
  
  hotelName = "SHRATON-5 STAR HOTEL";

  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom! : RoomList

  rooms : Room = {
    totalRooms :20,
    avilableRooms:5,
    bookedRooms:5
  };
  
  title = 'Room List';

  roomList : RoomList[]= [];

  @ViewChild(HeaderComponent,) headerComponent!:HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildreanComponent!:QueryList <HeaderComponent>;

   

    constructor(@SkipSelf() private roomsService:RoomsService) {}
    ngOnInit(): void {
      // console.log(this.headerComponent);
      this.roomList = this.roomsService.getRooms();
    }
    ngDoCheck(): void {
      console.log('On Changes is called')
    }
    ngAfterViewInit(): void {
      // console.log(this.headerComponent);
      this.headerComponent.title ="Room View";
      this.headerChildreanComponent.last.title="Last Title";
      this.headerChildreanComponent.get(0);

    }

    ngAfterViewChecked(): void {
      
    }
   

  toggle(){
    
    this.hideRooms = !this.hideRooms;

    this.title ="Special ROom List";

  }
  selectRoom(room : RoomList){
      this.selectedRoom = room;  }

      
      addRoom(){
        const room:RoomList ={
          roomNumber:4,
          roomType : 'BASIC Room',
          aminities : 'TV, BATHROOM',
          price :200,
          photos : 'https://as1.ftcdn.net/v2/jpg/06/19/00/08/1000_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg',
          checkInTime :new Date('1-DEC-2025'),
          checkOutTime :new Date ('12-JAN-2025'),
            rating :2.8
        };
            // this.roomList.push(room);
          this.roomList = [...this.roomList,room];

      }

     
};