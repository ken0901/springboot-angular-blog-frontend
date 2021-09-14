import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterPayload } from '../component/auth/register-payload';
import { LoginPayload } from '../component/auth/login/login.payload';
import { JwtAutResponse } from '../component/auth/jwt-aut-response';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:8080/api/auth/'

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) { }

  register(registerPayload: RegisterPayload): Observable<any> {
    return this.httpClient.post(this.url+'signup',registerPayload);
  }

  login(loginPayload: LoginPayload): Observable<boolean> {
    return this.httpClient.post<JwtAutResponse>(this.url+'login', loginPayload).pipe(map(data=>{
      this.localStorageService.store('authenticationToken', data.authenticationToken);
      this.localStorageService.store('username',data.username);
      return true;
    }));
  }
}
