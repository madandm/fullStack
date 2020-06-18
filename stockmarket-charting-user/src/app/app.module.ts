import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxEchartsModule} from 'ngx-echarts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { CompareComponent } from './pages/compare/compare.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MoneyPipe } from './pipe/money.pipe';
import { ChangepwdComponent } from './pages/changepwd/changepwd.component';
import { ChangeProfileComponent } from './pages/changeprofile/changeprofile.component';
import { SearchComponent } from './pages/search/search.component';
import { StockManageComponent } from './pages/stock/stock-manage/stock-manage.component';
import { EcharcompareComponent } from './pages/echarcompare/echarcompare.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
    MoneyPipe,
    CompareComponent,
    ChangepwdComponent,
    ChangeProfileComponent,
    SearchComponent,
    EcharcompareComponent,
    StockManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
