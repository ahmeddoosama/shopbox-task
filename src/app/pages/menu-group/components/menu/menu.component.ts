import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Menu } from '../../model/menu-groups.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuGroups: Menu[]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu() {
    this.http.get('http://localhost:3000/menuGroup').subscribe(res => {
      this.menuGroups = res as Menu[]
    })
  }

}
