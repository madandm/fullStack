import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import { AddcompanyComponent } from './pages/addcompany/addcompany.component';
import { AddNewComponent } from './pages/add-new/add-new.component';
import { DeleteCompanyComponent } from './pages/delete-company/delete-company.component';
import { EditcompanyComponent } from './pages/editcompany/editcompany.component';
import { MangeStockComponent } from './pages/mange-stock/mange-stock.component';
import { UpdateIPOComponent } from './pages/update-ipo/update-ipo.component';
import { MangeCompanyComponent } from './pages/mange-company/mange-company.component';
import { ImportdataComponent } from './pages/importdata/importdata.component';
import { UploadSummaryComponent } from './pages/upload-summary/upload-summary.component';
const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'mangeStock', component: MangeStockComponent},
  { path: 'add', component: AddNewComponent},
  { path: 'mangeCompany', component: MangeCompanyComponent},
  { path: 'addCompany', component: AddcompanyComponent},
  { path: 'deleteCompany', component: DeleteCompanyComponent},
  { path: 'editCompany', component: EditcompanyComponent},
  { path: 'updateIPO', component: UpdateIPOComponent},
  { path: 'import', component: ImportdataComponent},
  { path: 'uploadsummary', component: UploadSummaryComponent}
];

@NgModule({
  // Registering the RouterModule.forRoot() in the AppModule imports makes the Router service available everywhere in the application.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
