import { AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hotelinventory';

  role = 'Admin';
  // @ViewChild('user', {read:ViewContainerRef}) vcr! : ViewContainerRef;

  //   ngOnInit(): void {
  //  }
  //   ngAfterViewInit(): void {
  //     const componentRef = this.vcr.createComponent(RoomsComponent);
  //     componentRef.instance.numberOfRooms = 25;

  //   }

  @ViewChild('name', {static:true}) name! :ElementRef;

  constructor(@Optional() private loggerService:LoggerService){


  }
  ngOnInit(): void {

    this.loggerService?.log('Appcomponent.ngOnInit')
     this.name.nativeElement.innerText = "HIlTON HOTEL BRACH";
  }
}
