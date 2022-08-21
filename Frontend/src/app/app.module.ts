import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ApplnsComponent } from './applns/applns.component';
import { HistoryComponent } from './history/history.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddressComponent } from './address/address.component';
import { PhoneComponent } from './phone/phone.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ApplnsComponent,
    HistoryComponent,
    ContactsComponent,
    AddressComponent,
    PhoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
