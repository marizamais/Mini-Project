import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit, OnDestroy {

  constructor(private countriesService: CountriesService) { }

  countries: Array<any>=[];
  subscription: Subscription;

  ngOnInit() {
    this.subscription  = this.countriesService.getCountries().subscribe((data: any) => {this.countries= data;
    //console.log(data);
  });
  }

ngOnDestroy(){
  this.subscription.unsubscribe();
}

}
