import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterSuccessComponent } from './component/auth/register-success/register-success.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AddPostComponent } from './component/add-post/add-post.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HttpClientInterceptor } from './http-client-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    RegisterSuccessComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'register', component: RegisterComponent},
      {path:'login', component: LoginComponent},
      {path:'register-success', component: RegisterSuccessComponent},
      {path:'home', component: HomeComponent},
      {path:'add-post', component: AddPostComponent}
    ]),
    HttpClientModule,
    NgxWebstorageModule.forRoot(), // past version - Ng2Webstorage.forRoot()
    EditorModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
