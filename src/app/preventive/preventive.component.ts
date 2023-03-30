import { Component } from '@angular/core';
@Component({
  selector: 'app-preventive',
  templateUrl: './preventive.component.html',
  styleUrls: ['./preventive.component.scss'],
})
export class PreventiveComponent {
  clicked: boolean = false;
  tmparray: number[] = [];
  urlModel: boolean = true;
  fullname: string = '';
  email: string = '';
  productType: string = '50';
  manteinance: string = '0';
  showthis: boolean = false;
  date: any;
  urlToCalc: number = 50;
  result: number = 0;
  urlgroup: string[] = ['www.pippo.it', 'wwww.lol.it', 'www.xd.com'];
  checkme: string = '';
  ischecked = false;
  priceCalculate() {
    if (this.email && this.fullname && this.date) {
      this.clicked = true;
      if (this.urlToCalc != 50) {
        this.urlToCalc = 0;
      }
      this.tmparray.push(
        parseInt(this.productType),
        this.urlToCalc,
        parseInt(this.manteinance)
      );
      this.result = this.tmparray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      this.tmparray = [];
    } else {
      alert('You have to fill out every field');
    }
  }
  eshopMethods() {
    this.showthis = true;
    this.ischecked = true;
  }
  hideEshop() {
    this.showthis = false;
    this.ischecked = false;
  }
  checkThisURL() {
    if (this.urlgroup.includes(this.checkme)) {
      alert('Domain not available');
    } else if (this.checkme == '') {
      alert('You cannot leave this field blank');
    } else if (!this.urlgroup.includes(this.checkme)) {
      alert('Domain available');
    }
  }
}
