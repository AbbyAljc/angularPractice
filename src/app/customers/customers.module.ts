//NEVER IMPORT BROWSER MODULE MORE THAN ONCE
//contains directives
import { CommonModule } from '@angular/common';
//decorator which orivudes metaData
import { NgModule } from '@angular/core';
//routing

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';

//so really what we are doing is dynamically loading scripts

//this is the decorator
@NgModule({
  //declare what's in our bucket
  imports: [
    CommonModule
  ],
  declarations: [
    CustomersComponent, CustomersListComponent, FilterTextboxComponent
  ],
  exports: [ CustomersComponent ]
  
})

export class CustomersModule { }
