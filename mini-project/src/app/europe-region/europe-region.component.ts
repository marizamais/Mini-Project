import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountriesService, Country } from '../countries.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-europe-region',
  templateUrl: './europe-region.component.html',
  styleUrls: ['./europe-region.component.scss']
})
export class EuropeRegionComponent implements OnInit, OnDestroy {

  constructor(private countriesService: CountriesService) { }

  countries: Array<Country>=[];

  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.countriesService.getCountries().subscribe((data: Country[]) => {this.countries= data;});
  }

ngOnDestroy(){
  this.subscription.unsubscribe();
}

}
