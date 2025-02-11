import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush

})
export class RoomsListComponent implements OnInit , OnDestroy ,OnChanges {

  @Input () rooms :RoomList[] = [];

  @Input () title :string = '';


  @Output() selectedRoom = new EventEmitter <RoomList>();
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
    if(changes['title'] ){
      this.title = changes['title'].currentValue;
    }
  }

  selectRoom(room :RoomList){
    this.selectedRoom.emit(room);
  }
  ngOnInit(): void {
      
  }

  ngOnDestroy(): void {

    console.log('ON Destroy Is Called');  
    
  }
  
}
