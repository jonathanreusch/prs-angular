import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class SystemService {
  loggedInUser?: User = undefined;
  //user$ = of(this.loggedInUser);

  constructor() {}

  //getLoggedInUser(): Observable<User?> {
}
