import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../../pages/home/model/home.model';
import { Menu } from '../../../pages/menu-group/model/menu-groups.model';
import { SharingDataService } from './../../service/sharing-data.service';
import { CheckOfferService } from '../../service/check-offer.service';

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
  items: Item[] = [];
  //#endregion

  constructor(
    private sharingDataService: SharingDataService,
    private checkOfferService: CheckOfferService,
    private http: HttpClient,
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
      image: this.image,
      taxPercentage: this.taxPercentage,
      count: 1
    }

    this.sharingDataService.addData(favItem);
  }

  addToCart() {
    this.addCart = true;
    const cartItem:Item = {
      id: this.id,
      name: this.name,
      price: this.price,
      image: this.image,
      taxPercentage: this.taxPercentage,
      count: 1
    }

    let found = this.sharingDataService.cartMenu.value.find((product) => product.id == cartItem.id);
    if(found) {
      found.count++;
    }else{
      this.sharingDataService.addCartData(cartItem)
    }


    // this.checkOfferService.offerGroup.value.forEach(offer => {
    //   let foundInOffer = offer.collection.find(product => product.id == cartItem.id);

    //   if(foundInOffer) { //TODO if cart item founded in offer collection add this cart item in mutual array
    //     console.log("foundInOffer =>", foundInOffer);
    //     this.checkOfferService.createMutualArray(foundInOffer)
    //   }else if(!foundInOffer){ //TODO if not found add in nonMutual array
    //     // this.checkOfferService.createNonMutualArray(cartItem)
    //   }
    // });
    
    // this.checkOfferService.offerGroup.value.forEach(offer => {
    //   // console.log("offer =>", offer);
      
    //   if(offer.menu_groups.length === 1) { //TODO Check length of sellable list in menu groups
    //     let foundObj = offer.menu_groups[0].sellable_list.find(sellableOfferItem => sellableOfferItem.id == cartItem.id) //TODO Find cart Item is in sellable list or not
    //     // console.log("offer.menu_groups[0].sellable_list =>", offer.menu_groups[0].sellable_list);
        
    //     if(foundObj) {
    //       this.checkOfferService.createMutualArray(foundObj)
    //       if(this.checkOfferService.mutualArray.value.length >= offer.menu_groups[0].quantity) {
    //           // let result = offer.menu_groups[0].sellable_list.filter(sellableOfferItem => this.checkOfferService.mutualArray.value.some(item => sellableOfferItem.id === item.id));
    //           // if(result) {
    //           //   console.log();
                
    //           // }
    //         }
    //       }
    //     }
    //     // console.log("newArray =>",this.checkOfferService.mutualArray.value)
    //   })
    }
    //#endregion
  }
