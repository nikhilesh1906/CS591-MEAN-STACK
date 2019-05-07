import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) {
  }

  getLogin(): {
    return this.http.get('http://localhost:8000/auth/google');
  }
}
