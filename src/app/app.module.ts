import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import {NgPipesModule} from 'ngx-pipes';
import { CrmTntComponent } from './crm-tnt/crm-tnt.component';
import { SuperviseurComponent } from './superviseur/superviseur.component';
import { Routes, RouterModule} from '@angular/router';
const routes:Routes=[
  {path:'commerciale', component:CrmTntComponent},
  {path:'supervideur', component:SuperviseurComponent},
  {path:'',redirectTo:'/commerciale' ,pathMatch:'full'},
  
];
@NgModule({
  declarations: [
    AppComponent,
    CrmTntComponent,
    SuperviseurComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    NgPipesModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
