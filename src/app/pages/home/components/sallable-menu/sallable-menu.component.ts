import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sallable-menu',
  templateUrl: './sallable-menu.component.html',
  styleUrls: ['./sallable-menu.component.scss']
})
export class SallableMenuComponent implements OnInit {
  favTab: boolean = false;
  menu: boolean = false;
  currentTab: string;

  constructor() { }

  ngOnInit(): void {
  }

  checkCurrentTab(currentTab: string){
    if (currentTab === 'menu') {
      this.currentTab = 'menu';
    } else if (currentTab === 'fav') {
      this.currentTab = 'fav';
    }
  }

}
