import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { ApplnsComponent } from './applns/applns.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { PhoneComponent } from './phone/phone.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'applns',component:ApplnsComponent},
{path:'history',component:HistoryComponent},
{path:'contacts',component:ContactsComponent,
children:[
  {path:'address',component:AddressComponent},
  {path:'phone',component:PhoneComponent}
]},
{path:'',component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
