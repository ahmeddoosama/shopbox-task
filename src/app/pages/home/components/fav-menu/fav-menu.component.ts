import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/home.model';
import { SharingDataService } from './../../../../shared/service/sharing-data.service';

@Component({
  selector: 'app-fav-menu',
  templateUrl: './fav-menu.component.html',
  styleUrls: ['./fav-menu.component.scss']
})
export class FavMenuComponent implements OnInit {

  items: Item[]

  constructor(private sharingDataService: SharingDataService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.sharingDataService.favMenu.subscribe(data => {
      this.items = data
    })
  }

}
