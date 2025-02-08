import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit ,DoCheck{
  
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

    constructor() {}
    ngOnInit(): void {
        this.roomList = [
          {
            roomNumber:1,
            roomType : 'Delux Room',
            aminities : 'Air Condition,TV, BATHROOM',
            price :1500,
            photos : 'https://as1.ftcdn.net/v2/jpg/06/19/00/08/1000_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg',
            checkInTime :new Date('11-FEB-2025'),
            checkOutTime :new Date ('25-FEB-2025'),
            rating : 3.1234
          },
          {
    
          roomNumber:2,
          roomType : 'LUX Room',
          aminities : 'Air Condition,WIFI,TV, BATHROOM',
          price :2500,
          photos : 'https://as1.ftcdn.net/v2/jpg/06/19/00/08/1000_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg',
          checkInTime :new Date('18-FEB-2025'),
          checkOutTime :new Date ('30-FEB-2025'),
            rating : 4.287
        },
        {
        roomNumber:3,  
        roomType : 'Private Suit Room',
        aminities : 'Air Condition,Free WIFI,TV,LUXUARY BATHROOM',
        price :25000,
        photos : 'https://as1.ftcdn.net/v2/jpg/06/19/00/08/1000_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg',
        checkInTime :new Date('1-FEB-2025'),
        checkOutTime :new Date ('-FEB-2025'),
        rating : 4.789
      }
        ]
    }
    ngDoCheck(): void {
      console.log('On Changes is called')
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