import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Menu } from '../../pages/menu-group/model/menu-groups.model';
import { SharingDataService } from './sharing-data.service';

@Injectable({
  providedIn: 'root'
})
export class CheckOfferService {

  offerGroup: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  offerData = this.offerGroup.asObservable();

  mutualArray: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  mutualData = this.mutualArray.asObservable();

  nonMutualArray: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  nonMutualData = this.nonMutualArray.asObservable();


  constructor(
    private http: HttpClient,
    private sharingDataService: SharingDataService
  ) {
    this.getMenu();
  }


  //#region Functions
  getMenu() {
    this.http.get("http://localhost:3000/menuGroup").subscribe((res) => {
      let menuGroups = res as Menu[];

      this.offerGroup.next(menuGroups);
    });
  }

  createMutualArray(dataObj) {
    const currentValue = this.mutualArray.value;
    let updatedValue = [...currentValue, dataObj];

    this.mutualArray.next(updatedValue);

    // console.log("mutualArray =>", this.mutualArray.value)

    this.offerGroup.value.forEach(offer => {
      if(this.mutualArray.value.length === offer.quantity) { //TODO check if mutual array equal any quantity of offer
        // console.log("offer =>", offer)
        this.sharingDataService.cartMenu.next([]) //TODO Clear Old Cart and Push New Cart With Offer
        const newCart = [
          {
            id: offer.id,
            name: offer.name,
            price: offer.price,
            taxPercentage: offer.taxPercentage,
            quantity: offer.quantity,
            count: 1,
            collection: [...this.mutualArray.value]
          },
          ...this.nonMutualArray.value
        ]
        // console.log("new cart =>", newCart);
        this.mutualArray.next([])
        this.sharingDataService.cartMenu.next(newCart)
      }
    })
  }

  createNonMutualArray(dataObj) {
    let foundObj = this.mutualArray.value.find(item => item.id == dataObj.id)

    if(!foundObj) {
      const currentValue = this.nonMutualArray.value;
      let updatedValue = [...currentValue, dataObj];
      this.nonMutualArray.next(updatedValue);

      // console.log("nonMutualArray =>", this.nonMutualArray.value)
    }else{
      console.log('founded');
    }
  }
  //#endregion

}
