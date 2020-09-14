import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { User } from "../model/user";
import { map } from "rxjs/operators";
import { AngularTokenService } from "angular-token";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(
    private api: ApiService,
    private tokenService: AngularTokenService
  ) {}

  loadUsers(): Observable<User[]> {
    let params = {};
    return this.api.get("api/v1/users", params).pipe(
      map((data) => {
        return data as Array<User>;
      })
    );
  }

  loadUser(facility_id: number): Observable<User> {
    let params = {};
    return this.api.get("api/v1/users/" + facility_id, params).pipe(
      map((data) => {
        return new User(data);
      })
    );
  }

  angularTokenRegister(
    last_name: string,
    first_name: string,
    email: string,
    password: string,
    passwordConfirmation: string
  ): Observable<any> {
    return this.tokenService.registerAccount({
      last_name: last_name,
      first_name: first_name,
      login: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
    });
  }

  angularTokenSignIn(email: string, password: string): Observable<any> {
    return this.tokenService.signIn({
      login: email,
      password: password,
    });
  }

  angularTokenSignOut(): Observable<any> {
    return this.tokenService.signOut();
  }

  login(): Observable<any> {
    let params = {
      user: {
        email: "shungo12tennis@gmail.com",
        password: "111210",
      },
    };
    return this.api.post("users/sign_in", params);
  }

  signUp(): Observable<any> {
    let params = {
      password: "secretPassword",
      password_confirmation: "secretPassword",
      name: "Shungo",
      email: "shungo@gmail.com",
    };
    return this.api.post("api/v1/auth", params);
  }
}
