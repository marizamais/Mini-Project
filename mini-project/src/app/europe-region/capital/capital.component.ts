import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CountriesService } from 'src/app/countries.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.scss']
})
export class CapitalComponent implements OnInit, OnDestroy {

  countries: Array<any>=[];

  capitalName: string;
  href: string;

  subscriptionRouter: Subscription;
  subscriptionCapitalDetails: Subscription;

  constructor(private countriesService: CountriesService,
    private router: Router) { 
      
      this.subscriptionRouter = router.events.subscribe(val => {
        this.href= window.location.href;
        this.capitalName=this.href.substr(this.href.lastIndexOf('/') + 1);
        this.subscriptionCapitalDetails = this.countriesService.getCapitalDetails(this.capitalName).subscribe((data) => {this.countries= data;});
      }); 
    }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.subscriptionRouter.unsubscribe();
    this.subscriptionCapitalDetails.unsubscribe();
  }

}
