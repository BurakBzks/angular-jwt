import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://localhost:5001/api/Customers', {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: '',
        }),
      })
      .subscribe(
        (response) => {
          this.customers = response;
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
