import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddRestoComponent,
    UpdateRestoComponent,
    ListRestoComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
