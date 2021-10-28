import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Menu } from '../../pages/menu-group/model/menu-groups.model';

@Injectable({
  providedIn: 'root'
})
export class CheckOfferService {

  offerGroup: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  offerData = this.offerGroup.asObservable();

  mutualArray: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  mutualData = this.mutualArray.asObservable();


  constructor(
    private http: HttpClient,
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

    console.log("this.mutualArray =>", this.mutualArray.value)

    // TODO Start Check On Mutual Array After contain 4 Items
    if(this.mutualArray.value.length >= 4) {
      console.log("array contain 4 items");

      // TODO Loop in offersGroup because check on (quantity and items contain in this) offer
      this.offerGroup.value.forEach(offer => {

        // TODO if Mutual Array equal offer quantity
        if(offer.quantity === this.mutualArray.value.length) {
          console.log('offer.collection == mutualArray')

          // TODO check mutualArray Contain at less one item Who is in this items in offer
          offer.collection.every(el => {
            if(this.mutualArray.value.includes(el)) {
              console.log(`offer name (${offer.name}) =>`, offer)
              console.log("include true");
            }
          })
        }
      })
    }
  }
  //#endregion

}
