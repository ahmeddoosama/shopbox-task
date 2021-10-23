import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from 'src/app/pages/home/model/home.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  favMenu: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  favData = this.favMenu.asObservable();


  constructor(private toastrService: ToastrService) {
  }

  addData(dataObj){
    const currentValue = this.favMenu.value;
    const updatedValue = [...currentValue, dataObj];
    if(updatedValue.includes(dataObj)) {
      console.log("true")
    }
    this.favMenu.next(updatedValue);
    
    console.log("currentValue B =>", currentValue)
    console.log("updatedValue B =>", updatedValue)
    console.log("favMenu =>", this.favMenu.value)
  }
}
