    export interface Room {
        totalRooms:number;
        avilableRooms:number;
        bookedRooms:number;
    }

    export interface RoomList{
        roomNumber:number;
        roomType:string;
        aminities:string;
        price:number;
        photos:string;
        checkInTime:Date;
        checkOutTime:Date;
        rating:number;

    }