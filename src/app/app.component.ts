import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrencyService } from './services/currency.service';
import { Currency } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  cryptocurrencies: Array<Currency> = [];
  interval: any;
  loading = false;

  constructor(
    private currencyService: CurrencyService
  ) {
    this.loadCurrencies();
  }

  loadCurrencies() {
    this.loading = true;
    this.currencyService.all()
      .subscribe(
        (data) => {
          this.cryptocurrencies = data;
          this.loading = false;
        }
      );
  }

  ngOnInit() {
/*     this.interval = setInterval(() => {
      this.loadCurrencies();
    }, 1000);
 */  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
