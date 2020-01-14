import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PublichomeComponent } from './publichome/publichome.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppTestService } from './app-test.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CanAuthenticate } from './canser';
import { GrandparentComponent } from './grandparent/grandparent.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChildCommunicationComponent } from './parent_child_communication/child';
import { ParentCommunicationComponent } from './parent_child_communication/parent';
import { Backend } from './backend.service';
import { TitleCaseBrohhhh } from './titlecase.directive';
@NgModule({
  declarations: [
    AppComponent,
    PublichomeComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    GrandparentComponent,
    ParentComponent,
    ChildComponent,
    ParentCommunicationComponent,
    ChildCommunicationComponent,
    TitleCaseBrohhhh
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AppTestService,
    CanAuthenticate,
    Backend
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
