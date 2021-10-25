import { Component, Input, OnInit } from '@angular/core';
import { Collection } from '../../../home/model/home.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() id:number;
  @Input() image:string;
  @Input() name:string;
  @Input() price:number;
  @Input() taxPercentage:number;
  @Input() collection: Collection[];


  constructor() { }

  ngOnInit(): void {
  }

}
