import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  status: string;
  code: number;
  total: number;
  data: companyDetails[];
}

interface companyDetails {
  id: number;
  name: string;
  email: string;
  vat: number;
  phone: number;
  country: string;
  addresses: companyAddresses[];
  website: string;
  image: string;
  contact: companyContact[];
}

interface companyAddresses {
  id: number;
  street: string;
  streetName: string;
  buildingNumber: number;
  city: string;
  zipcode: number;
  country: string;
  country_code: string;
  latitude: number;
  longitude: number;
}

interface companyContact {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  birthday: number;
  gender: string;
  address: contactAddress[];
  website: string;
  image: string;
}

interface contactAddress {
  id: number;
  street: string;
  streetName: string;
  buildingNumber: number;
  city: string;
  zipcode: number;
  country: string;
  country_code: string;
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {
  companies: companyDetails[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Response>('https://fakerapi.it/api/v1/companies?_quantity=100')
      .subscribe((response: Response) => {
        for (let i = 0; i < 100; i++) {
          this.companies.push({
            id: response.data[i].id,
            name: response.data[i].name,
            email: response.data[i].email,
            vat: response.data[i].vat,
            phone: response.data[i].phone,
            country: response.data[i].country,
            addresses: response.data[i].addresses,
            website: response.data[i].website,
            image: response.data[i].image,
            contact: response.data[i].contact,
          });
        }
      });
    console.log(this.companies);
  }

  //searchTerm: string;
  //
  //searchFilter() {
  //if (this.searchTerm) {
  //this.filteredName = this.companies.filter(this.companies);
}
//}
//}
