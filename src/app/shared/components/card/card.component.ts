import { Component, Input, OnInit } from '@angular/core';
import { SharingDataService } from './../../service/sharing-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() id:number;
  @Input() image:string;
  @Input() name:string;
  @Input() price:number;
  @Input() taxPercentage:number;

  favMenu: {name: string, price: number}[] = [];
  addToFav: boolean = false;

  constructor(
    private sharingDataService: SharingDataService
  ) { }

  ngOnInit(): void {
  }
  

  addToFavorite() {

    const VARIABLE:{name: string, price: number} = {
      name: this.name,
      price: this.price,
    }
    
    this.sharingDataService.addData(VARIABLE);

  }

}
