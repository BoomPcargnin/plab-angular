import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewType } from '../ViewNames.type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() active: ViewType
  @Output() changeView = new EventEmitter<ViewType>()
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(view: ViewType){
    this.changeView.emit(view)
  }

}
