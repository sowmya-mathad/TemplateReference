import { Component } from '@angular/core';
import { Customer } from './customer';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
  selectedCustomer: any;
  customers: Customer[] =[
    {custNum:1, custName:'Shreyansh-1', custAddress:'Piedmont', custCity: 'Charlotte', custCountry: 'USA'},
    {custNum:2, custName:'Shreyansh-2', custAddress:'', custCity: 'Charlotte', custCountry: 'USA'},
    {custNum:3, custName:'Shreyansh-3', custAddress:'', custCity: 'Charlotte', custCountry: 'USA'},
    {custNum:4, custName:'Shreyansh-4', custAddress:'', custCity: 'Charlotte', custCountry: 'USA'},
    {custNum:5, custName:'Shreyansh-5', custAddress:'', custCity: 'Charlotte', custCountry: 'USA'},

  ]
}

/** A local reference variable is a variable which stores a reference 
 to the DOM Element/component/directive  **/