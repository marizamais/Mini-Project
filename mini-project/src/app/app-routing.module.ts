import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EuropeRegionComponent } from './europe-region/europe-region.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CapitalComponent } from './europe-region/capital/capital.component';
import { CountriesComponent } from './currencies/countries/countries.component';

const routes: Routes = [
  { path: 'europe-region', component: EuropeRegionComponent,
    children: [      
      {        
        path: "capital/:name",        
        component: CapitalComponent      
      }    
    ] 
  }, 
  { path: 'currencies', component: CurrenciesComponent,
  children: [      
    {        
      path: "currency/:currency",        
      component: CountriesComponent     
    }    
  ]  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
