import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountriesService } from 'src/app/countries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries: Array<any>=[];
  currency: string;
  href: string;

  subscriptionRouter: Subscription;
  subscriptionCurrencies: Subscription;

  constructor(private countriesService: CountriesService,
    private router: Router) { 
      
      this.subscriptionRouter = router.events.subscribe(() => {
    
        this.href= window.location.href;
        this.currency=this.href.substr(this.href.lastIndexOf('/') + 1);
        this.subscriptionCurrencies =this.countriesService.getCurrencies(this.currency).subscribe((data) => {this.countries= data;});
    
      }); 
    }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.subscriptionRouter.unsubscribe();
    this.subscriptionCurrencies.unsubscribe();
  }

}
