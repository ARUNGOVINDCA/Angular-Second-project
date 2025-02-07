import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush

})
export class RoomsListComponent{

  @Input () rooms :RoomList[] = [];

  @Input () title :string = '';


  @Output() selectedRoom = new EventEmitter <RoomList>();

  selectRoom(room :RoomList){
    this.selectedRoom.emit(room);
  }
  
}
