import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { SharingDataService } from "../../../../shared/service/sharing-data.service";
import { Menu } from "../../../menu-group/model/menu-groups.model";
import { Collection, Item } from "../../model/home.model";
import { element } from "protractor";
import { MatDialog } from "@angular/material/dialog";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  //#region Variables
  items: Item[] = [];
  menuGroups: Menu[] = [];
  newCollection: any[] = [];
  totalCartPrice: any;
  totalCartPriceWithTax: any;
//#endregion

  constructor(
    public dialog: MatDialog,
    private toastrService: ToastrService,
    private sharingDataService: SharingDataService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.getMenu();
    this.getItems();
  }

  //#region Get Data
  getMenu() {
    this.http.get("http://localhost:3000/menuGroup").subscribe((res) => {
      this.menuGroups = res as Menu[];
    });
  }

  getItems() {
    this.sharingDataService.cartMenu.subscribe((data) => {
      this.items = [...data];
      this.totalCartPrice = this.sharingDataService.countTotal(this.items);
      this.totalCartPriceWithTax = this.sharingDataService.totalWithTax(this.items);
    });
  }
  //#endregion

  //#region Create Function
  // compareArr() {
  //   this.menuGroups.map((menuGroup) => {
  //     if (menuGroup.collection.length == this.items.length) {
  //       menuGroup.collection.map((collectionItem) => {
  //         this.items.map((item) => {
  //           if (collectionItem.id == item.id) {
  //             this.newCollection.push(collectionItem);
  //           }
  //         });
  //       });

  //       if (menuGroup.collection.length == this.newCollection.length && this.items.length == this.newCollection.length) {
  //         this.toastrService.success('Your Order there is a discount on it');
  //         this.totalCartPrice = this.sharingDataService.countTotalOffer(menuGroup);
  //         this.totalCartPriceWithTax = this.sharingDataService.totalWithTaxOffer(menuGroup);
  //       }
  //     }
  //   });
  // }
  //#endregion
}
