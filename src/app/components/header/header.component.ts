import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  list: Array<string>;

  @Input()
  buttonList: Array<string>;

  @Output()
  onMenuClick : EventEmitter<string> = new EventEmitter<string>(); 

  @Output()
  onButtonItemClick: EventEmitter<number> = new EventEmitter<number>();

  selectedButtonIndex = 0;

  onBtnClick(index){
    this.onButtonItemClick.emit(index);
    this.selectedButtonIndex = index;
  }

  constructor() { }

  ngOnInit() {
  }

  menuItemClicked(e, menuItem){
    e.preventDefault();
    this.onMenuClick.emit(menuItem);
  }

}
