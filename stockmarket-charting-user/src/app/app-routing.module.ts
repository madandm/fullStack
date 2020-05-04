import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import { CompareComponent } from './pages/compare/compare.component';
import { ChangepwdComponent } from './pages/changepwd/changepwd.component';
import { ChangeProfileComponent } from './pages/changeprofile/changeprofile.component';
import { EcharcompareComponent } from './pages/echarcompare/echarcompare.component';
import { SearchComponent } from './pages/search/search.component';
import { StockManageComponent } from './pages/stock/stock-manage/stock-manage.component';
const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent},
  { path: 'compare', component: CompareComponent},
  { path: 'change-pwd', component: ChangepwdComponent},
  { path: 'change-profile', component: ChangeProfileComponent},
  { path: 'echart', component: EcharcompareComponent},
  { path: 'search', component: SearchComponent},
  { path: 'search1', component: StockManageComponent}
];

@NgModule({
  // Registering the RouterModule.forRoot() in the AppModule imports makes the Router service available everywhere in the application.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
