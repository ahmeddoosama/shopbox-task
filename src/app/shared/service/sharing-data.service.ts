import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from 'src/app/pages/home/model/home.model';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../../pages/menu-group/model/menu-groups.model';
import { CheckOfferService } from './check-offer.service';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  //#region Variable
  total!: number;

  favMenu: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  favData = this.favMenu.asObservable();

  cartMenu: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  cartData = this.favMenu.asObservable();

  offerGroup: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  offerData = this.offerGroup.asObservable();

  //#endregion

  constructor(
    private toastrService: ToastrService,
    private http: HttpClient,
    ) {
      this.getMenu();
    }


    getMenu() {
      this.http.get("http://localhost:3000/menuGroup").subscribe((res) => {
        let menuGroups = res as Menu[];
  
        this.offerGroup.next(menuGroups);
      });
    }

  //#endregion Functions
  addData(dataObj){
    const currentValue = this.favMenu.value;
    let updatedValue = [...currentValue];

    const t = updatedValue.map(x => x.name).indexOf(dataObj.name);

    if(t>-1){
      this.toastrService.error('This Item Already in Favorite')
    }else{
      updatedValue = [...currentValue,dataObj];
      this.favMenu.next(updatedValue);
    }
  }

  addCartData(dataObj){
    const currentValue = this.cartMenu.value;
    let updatedValue = [...currentValue,dataObj];

    this.cartMenu.next(updatedValue);

    this.checkOffers();
  }

  checkOffers() {
    if(this.cartMenu.value.length >= 2){
      console.log("length of cart items now equal 4");
      this.offerGroup.value.forEach(offer => {
        if(offer.menu_groups.length === 1) {
          const mutualArray = this.cartMenu.value.filter(cartItem => offer.menu_groups[0].sellable_list.some(offerItem => offerItem.id === cartItem.id))

          if(mutualArray) {
            let newMutualArray = []
            newMutualArray.push(...mutualArray)
            if(newMutualArray.length === offer.menu_groups[0].quantity) {
              let newCartMenu = []
              newCartMenu.push(...this.cartMenu.value)
              for(let i = 0; i < newCartMenu.length; i++){
                for(let j = 0; j < newMutualArray.length; j++){
                  if(newCartMenu[i].id === newMutualArray[j].id){
                    newCartMenu.splice(newCartMenu[i], 1)
                  }
                }
              }
              newCartMenu.push({
                id: offer.id,
                name: offer.name,
                price: offer.price,
                count: 1,
                menu_groups: [
                  {
                    quantity: offer.menu_groups[0].quantity,
                    taxPercentage: offer.menu_groups[0].taxPercentage,
                    sellable_list: [...mutualArray]
                  }
                ]
              })

              this.cartMenu.next(newCartMenu)
            }
          }
        }

        if(offer.menu_groups.length === 2) {
          offer.menu_groups.forEach(menu_group => {
            const mutualArray = this.cartMenu.value.filter(cartItem => menu_group.sellable_list.some(offerItem => offerItem.id === cartItem.id))
            
            // console.log("mutualArray offer 2 =>", mutualArray)
            
            if(mutualArray) {
              let newMutualArray = []
              newMutualArray.push(...mutualArray)
              
              if(newMutualArray.length === menu_group.quantity) {
                console.log("newMutualArray offer 2 =>", newMutualArray)
              }
            }
          });
        }
      })
    }
  }

  countTotal(cartDetail: any) {
    // console.log("cartDetail =>", cartDetail);

    this.total = 0;
    cartDetail.forEach((el: any) => {
      this.total = (el?.price * el?.count) + this.total;
    });

    return this.total ? this.total : 0 ;
  }

  totalWithTax(cartDetail: any) {
    this.total = 0;
    cartDetail.forEach((el: any) => {
      this.total = (((el?.taxPercentage / 100) * el?.price) + el?.price) + this.total;
    });
    return this.total ? this.total : 0 ;
  }

  countTotalOffer(cartDetail: any) {
    this.total = 0;
    this.total = (cartDetail?.price * cartDetail?.count) + this.total;
    return this.total ? this.total : 0 ;
  }

  totalWithTaxOffer(cartDetail: any) {
    this.total = 0;
    this.total = (((cartDetail?.taxPercentage / 100) * cartDetail?.price) + cartDetail?.price) + this.total;
    return this.total ? this.total : 0 ;
  }
  //#endregion
}
