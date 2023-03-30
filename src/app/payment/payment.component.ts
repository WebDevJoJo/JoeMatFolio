import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Response {
  status: string;
  code: number;
  total: number;
  data: creditCard[];
}
interface creditCard {
  type: string;
  number: number;
  expiration: string;
  owner: string;
  checked: boolean;
}
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  NumberArray: creditCard[] = [];
  sortedNumberArray: creditCard[] = [];
  cardArray: creditCard[] = [];
  owner: string = '';
  cardnum: string = '';
  expdata: string = '';
  cardcircuit: string = '';
  cvv: string = '';
  message: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Response>('https://fakerapi.it/api/v1/credit_cards?_quantity=5')
      .subscribe((response: Response) => {
        for (let i = 0; i < response.data.length; i++) {
          this.NumberArray.push({
            number: Number(response.data[i].number),
            type: response.data[i].type,
            expiration: response.data[i].expiration,
            owner: response.data[i].owner,
            checked: false,
          });
        }
        for (let i = 0; i < this.NumberArray.length; i++) {
          for (let j = i + 1; j < this.NumberArray.length; j++) {
            if (this.NumberArray[i].number > this.NumberArray[j].number) {
              let temp = this.NumberArray[i].number;
              this.NumberArray[i].number = this.NumberArray[j].number;
              this.NumberArray[j].number = temp;
            }
          }
        }
        this.sortedNumberArray = [...this.NumberArray];
      });
  }
  checkInput(index: number) {
    for (let card of this.sortedNumberArray) {
      if (card.checked) {
        card.checked = false;
      }
    }
    this.sortedNumberArray[index].checked =
      !this.sortedNumberArray[index].checked;
  }
  UploadCard() {
    if (
      this.owner &&
      this.cardnum &&
      this.expdata &&
      this.cardcircuit &&
      this.cvv
    ) {
      if (this.cvv > '999') {
        this.cvv = '999';
      }
      this.message =
        'Tu sei: ' +
        this.owner +
        ' <br> Il tuo cardnum è ' +
        this.cardnum +
        '<br> La sua data di scadenza: ' +
        this.expdata +
        '<br> Il suo circuito: ' +
        this.cardcircuit +
        ' <br> Il suo cvv è: ' +
        this.cvv;
    } else {
      this.message = 'You cannot leave this field blank';
    }
  }
}
