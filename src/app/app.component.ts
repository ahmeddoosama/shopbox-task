import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CoreFacade } from './core/facades/core.facade';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // dataModel=''
  title = 'ShopboxTask';

  toggleShow = false;
  isAuthPage=false;

  constructor(public router: Router,) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
        event.url.includes('auth')?this.isAuthPage=true:this.isAuthPage=false
      });
  }

  //  config = {
  //   displayKey:"name", 
  //   search:true, 
  //   height: 'auto',
  //   placeholder:'Select',
  //   customComparator: ()=>{} ,
  //   limitTo: 0,
  //   moreText: 'more' ,
  //   noResultsFound: 'No results found!' ,
  //   searchPlaceholder:'Search' ,
  //   searchOnKey: 'name'
  //   }
  //   dropdownOptions= [
  //     { name:"Ahmed Osama"}
  //   ]
}
