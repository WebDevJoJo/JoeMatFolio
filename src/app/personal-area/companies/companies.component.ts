import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  status: string;
  code: number;
  total: number;
  data: CompanyDetails[];
}

interface CompanyDetails {
  id: number;
  name: string;
  email: string;
  vat: number;
  phone: number;
  country: string;
  addresses: CompanyAddresses[];
  website: string;
  image: string;
  contact: CompanyContact[];
}

interface CompanyAddresses {
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

interface CompanyContact {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  birthday: number;
  gender: string;
  address: ContactAddress[];
  website: string;
  image: string;
}

interface ContactAddress {
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
  companiesList: CompanyDetails[] = [];
  filteredCompanies = this.companiesList;
  countriesList: string[] = [];
  countriesSortedList: string[] = [];

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
          this.countriesList.push(response.data[i].country);
        }
        this.sortedCountriesFilterConstructor();
      });
  }

  sortedCountriesFilterConstructor() {
    this.countriesList.sort();
    this.countriesSortedList = [...new Set(this.countriesList)];
    console.log(this.countriesList);
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
