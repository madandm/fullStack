import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MoneyPipe } from './pipe/money.pipe';
import { AddcompanyComponent } from './pages/addcompany/addcompany.component';
import { AddcompanycomfirmComponent } from './pages/addcompanycomfirm/addcompanycomfirm.component';
import { AddNewComponent } from './pages/add-new/add-new.component';
import { AddNewConfirmComponent } from './pages/add-new-confirm/add-new-confirm.component';
import { DeleteCompanyComponent } from './pages/delete-company/delete-company.component';
import { EditcompanyComponent } from './pages/editcompany/editcompany.component';
import { MangeStockComponent } from './pages/mange-stock/mange-stock.component';
import { UpdateIPOComponent } from './pages/update-ipo/update-ipo.component';
import { MangeCompanyComponent } from './pages/mange-company/mange-company.component';
import { ImportdataComponent } from './pages/importdata/importdata.component';
import { UploadSummaryComponent } from './pages/upload-summary/upload-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    MoneyPipe,
    AddcompanyComponent,
    AddcompanycomfirmComponent,
    AddNewComponent,
    AddNewConfirmComponent,
    DeleteCompanyComponent,
    EditcompanyComponent,
    MangeStockComponent,
    UpdateIPOComponent,
    MangeCompanyComponent,
    ImportdataComponent,
    UploadSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
