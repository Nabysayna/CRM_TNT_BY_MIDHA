import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import {NgPipesModule} from 'ngx-pipes';
import { CrmTntComponent } from './crm-tnt/crm-tnt.component';
import { SuperviseurComponent } from './superviseur/superviseur.component';
import { Routes, RouterModule} from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { AutentificationService} from './service/autentification.service';
import { HttpClientModule} from '@angular/common/http';
import { AffectationService } from './service/affectation.service';
import { PaginationModule } from 'ngx-bootstrap';

const routes:Routes=[
  {path:'commerciale', component:CrmTntComponent},
  {path:'supervideur', component:SuperviseurComponent},
  {path:'login', component:ConnexionComponent},
  {path:'',redirectTo:'/login' ,pathMatch:'full'},
  
];
@NgModule({
  declarations: [
    AppComponent,
    CrmTntComponent,
    SuperviseurComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    NgPipesModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    PaginationModule.forRoot()
  ],
  providers:
  [
    AutentificationService,
    AffectationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
