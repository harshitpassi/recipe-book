import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() headerItemClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  handleClick(section: string) {
    this.headerItemClicked.emit(section);
  }

}
