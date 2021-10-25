import { Component, OnInit } from '@angular/core';
import { SharingDataService } from '../../../../shared/service/sharing-data.service';
import { Item } from '../../model/home.model';

@Component({
  selector: 'app-sallable-menu',
  templateUrl: './sallable-menu.component.html',
  styleUrls: ['./sallable-menu.component.scss']
})
export class SallableMenuComponent implements OnInit {
  //#region Variables
  favTab: boolean = false;
  menu: boolean = false;
  currentTab: string;

  getFavItems: Item[];
  getCartItems: Item[];
  //#endregion

  constructor(private sharingDataService: SharingDataService) { }

  ngOnInit(): void {
    this.wishlistQty();
    this.cartQty();
  }

  //#region Functions
  checkCurrentTab(currentTab: string){
    if (currentTab === 'menu') {
      this.currentTab = 'menu';
    } else if (currentTab === 'fav') {
      this.currentTab = 'fav';
    }
  }

  wishlistQty() {
    this.sharingDataService.favMenu.subscribe(data => {
      this.getFavItems = data
    })
  }

  cartQty() {
    this.sharingDataService.cartMenu.subscribe(data => {
      this.getCartItems = data
    })
  }
  //#endregion

}
