import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  list: Array<string>;

  @Output()
  onMenuClick : EventEmitter<string> = new EventEmitter<string>(); 
  constructor() { }

  ngOnInit() {
  }

  menuItemClicked(e, menuItem){
    e.preventDefault();
    this.onMenuClick.emit(menuItem);
  }

}
