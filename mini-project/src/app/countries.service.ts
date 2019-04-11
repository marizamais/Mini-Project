import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export interface Country{
  name: string;
  capital: string;
  population: string;
  nativeName: string;
  subregion: string;
  currency: string;
}


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  //Για τα ονόματα των χωρών, τις πρωτεύουσές και τα νομίσματα 
  private readonly endpointCountries = environment.API_ROOT + 'region/europe';
  
  // private readonly endpointCurrencies = environment.API_ROOT + 'currency/EUR?fields=name';


  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]>{
    return this.http.get<Country[]>(this.endpointCountries);
  }

  getCapitalDetails(capitalName: string): Observable<Country[]>{
    //Για τις λεπτομέρειες των πρωτευουσών
    return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/capital/${capitalName}`);
  }

 //Για τις χώρες που έχουν κάποιο νόμισμα 
  getCurrencies(currency: string): Observable<Country[]>{
    return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/currency/${currency}?fields=name`);
  }



}
