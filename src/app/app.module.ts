import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import {NgPipesModule} from 'ngx-pipes';
import { CrmTntComponent } from './crm-tnt/crm-tnt.component';

@NgModule({
  declarations: [
    AppComponent,
    CrmTntComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    NgPipesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
