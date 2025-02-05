import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  
  hotelName = "SHRATON-5 STAR HOTEL";

  numberOfRooms = 10;

  hideRooms = false;

  toggle(){
    
    this.hideRooms = !this.hideRooms;

  }


  rooms : Room = {
    totalRooms :20,
    avilableRooms:5,
    bookedRooms:5
  }


    roomList : RoomList[] = [
      {
          roomType : 'Delux Room',
        aminities : 'Air Condition,Free WIFI,TV,LUXUARY BATHROOM',
        price :1500,
        photos : 'https://as1.ftcdn.net/v2/jpg/06/19/00/08/1000_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg',
        checkInTime :new Date('11-FEB-2025'),
        checkOutTime :new Date ('25-FEB-2025')

      },
      {
        roomType : 'LUX Room',
      aminities : 'Air Condition,Free WIFI,TV,LUXUARY BATHROOM',
      price :2500,
      photos : 'https://as1.ftcdn.net/v2/jpg/06/19/00/08/1000_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg',
      checkInTime :new Date('18-FEB-2025'),
      checkOutTime :new Date ('30-FEB-2025')

    },
    {
      roomType : 'Private Suit Room',
    aminities : 'Air Condition,Free WIFI,TV,LUXUARY BATHROOM',
    price :25000,
    photos : 'https://as1.ftcdn.net/v2/jpg/06/19/00/08/1000_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg',
    checkInTime :new Date('1-FEB-2025'),
    checkOutTime :new Date ('-FEB-2025')

  }
    ]
};
