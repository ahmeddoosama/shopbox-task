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
    // this.getMenu();
  }


  //#region Functions
  getMenu() {
    this.http.get("http://localhost:3000/menuGroup").subscribe((res) => {
      let menuGroups = res as Menu[];

      this.offerGroup.next(menuGroups);
    });
  }

  // checkTwoArrays() {
  //   if(this.sharingDataService.cartMenu.value.length >= 4) {
  //     // const results = arrayOne.filter(({ value: id1 }) => !arrayTwo.some(({ value: id2 }) => id2 === id1));
  //     // const results = this.sharingDataService.cartMenu.value.filter(cartItem => )
  //   }
  // }

  createMutualArray(dataObj) {
    const currentValue = this.mutualArray.value;
    let updatedValue = [...currentValue, dataObj];

    this.mutualArray.next(updatedValue);
  }

  // createNonMutualArray(dataObj) {
  //   let foundObj = this.mutualArray.value.find(item => item.id == dataObj.id)

  //   if(!foundObj) {
  //     const currentValue = this.nonMutualArray.value;
  //     let updatedValue = [...currentValue, dataObj];
  //     this.nonMutualArray.next(updatedValue);

  //     // console.log("nonMutualArray =>", this.nonMutualArray.value)
  //   }else{
  //     console.log('founded');
  //   }
  // }
  //#endregion

}
