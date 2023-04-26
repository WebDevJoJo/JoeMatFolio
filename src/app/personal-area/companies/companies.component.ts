import { Component, OnInit } from '@angular/core';
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
  searchName: string = '';
  searchEmail: string = '';
  searchVat: string = '';
  searchPhone: string = '';
  searchCountry: string = '';
  companiesList: companyDetails[] = [];
  filteredCompanies = this.companiesList;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Response>('https://fakerapi.it/api/v1/companies?_quantity=100')
      .subscribe((response: Response) => {
        for (let i = 0; i < 100; i++) {
          this.companiesList.push({
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
  }

  companiesFilters(): void {
    if (
      this.searchName ||
      this.searchEmail ||
      this.searchVat ||
      this.searchPhone ||
      this.searchCountry
    ) {
      this.filteredCompanies = this.companiesList.filter(
        (item) =>
          item.name.toLowerCase().includes(this.searchName.toLowerCase()) &&
          item.email.toLowerCase().includes(this.searchEmail.toLowerCase()) &&
          item.vat
            .toString()
            .toLowerCase()
            .includes(this.searchVat.toLowerCase()) &&
          item.phone.toString().includes(this.searchPhone.toLowerCase()) &&
          item.country.includes(this.searchCountry)
      );
    } else {
      this.filteredCompanies = this.companiesList;
    }
    console.log(this.filteredCompanies);
  }

  resetCompaniesFilters() {
    this.searchName = '';
    this.searchEmail = '';
    this.searchVat = '';
    this.searchPhone = '';
    this.searchCountry = '';
    this.companiesFilters();
  }
}
