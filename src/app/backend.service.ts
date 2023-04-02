import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from 'src/interfaces/Stock';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private readonly http: HttpClient){}

  ping() {
    let response = this.http.get('/api/')
    response.subscribe(data => {
      console.log(data)
    })
  }

  putStock(ticker: string) {
    let stock: Stock = {ticker: ticker}
    let response = this.http.post('/api/stocks', {stock: stock}).subscribe(data => {
      console.log(data)
    })
  }

  fetchStocks() {
    let response = this.http.get('/api/stocks').subscribe(data => {
      console.log(data)
    })
  }

}
