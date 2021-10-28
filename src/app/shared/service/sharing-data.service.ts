import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from 'src/app/pages/home/model/home.model';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../../pages/menu-group/model/menu-groups.model';

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

  //#endregion

  constructor(
    private toastrService: ToastrService,
    ) {
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
