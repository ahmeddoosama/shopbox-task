import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../pages/home/model/home.model';
import { SharingDataService } from './../../service/sharing-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  //#region Inputs
  @Input() id:number;
  @Input() image:string;
  @Input() name:string;
  @Input() price:number;
  @Input() qty:number;
  @Input() taxPercentage:number;
  //#endregion

  //#region Variables
  favMenu: Item[] = [];
  addToFav: boolean = false;
  addCart: boolean = false;
  //#endregion

  constructor(
    private sharingDataService: SharingDataService
  ) { }

  ngOnInit(): void {
  }

  //#region Functions
  addToFavorite() {
    this.addToFav = true;
    const favItem:Item = {
      id: this.id,
      name: this.name,
      price: this.price,
      qty: this.qty,
      image: this.image,
      taxPercentage: this.taxPercentage
    }
    this.sharingDataService.addData(favItem);
  }

  addToCart() {
    this.addCart = true;
    const cartItem:Item = {
      id: this.id,
      name: this.name,
      price: this.price,
      qty: this.qty,
      image: this.image,
      taxPercentage: this.taxPercentage
    }

    this.sharingDataService.addCartData(cartItem)
  }
  //#endregion

}
