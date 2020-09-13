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

  angularTokenRegister(): Observable<any> {
    return this.tokenService.registerAccount({
      login: "example@example.org",
      password: "secretPassword",
      passwordConfirmation: "secretPassword",
      name: "Shungo",
    });
  }

  angularTokenSignIn(): Observable<any> {
    return this.tokenService.signIn({
      login: "example@example.org",
      password: "secretPassword",
    });
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
