import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Collection } from '../../model/home.model';

@Component({
  selector: 'app-card-groub',
  templateUrl: './card-groub.component.html',
  styleUrls: ['./card-groub.component.scss']
})
export class CardGroubComponent implements OnInit {

  collection: Collection[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCollection();
  }

  getCollection() {
    this.http.get('http://localhost:3000/collection').subscribe(res => {
      this.collection = res as Collection[];
    })
  }

}
