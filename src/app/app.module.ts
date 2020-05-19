//contains directives 
import { BrowserModule } from '@angular/platform-browser';
//decorator which orivudes metaData
import { NgModule } from '@angular/core';
//routing
import { AppRoutingModule } from './app-routing.module';
//importing the component that we created 
import { AppComponent } from './app.component';

import { CustomersModule } from './customers/customers.module';
import { SharedModule } from './shared/shared.module';

//so really what we are doing is dynamically loading scripts

//this is the decorator
@NgModule({
  //declare what's in our bucket
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomersModule,
    SharedModule
  ],
  providers: [],
  //the order in which things are loaded (what is the startup component?)
  bootstrap: [AppComponent]
})

export class AppModule { }
