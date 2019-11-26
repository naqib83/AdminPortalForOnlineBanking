import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Http, Headers } from "@angular/Http";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: Http) {}

  sendCredentials(username: string, password: string) {
    let url: "http://localhost:8080/index";
    let params = "username=" + username + "&password=" + password;
    let headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded"
    });

    return this.http.post(url, params, {
      headers: headers,
      withCredentials: true
    });
  }

  logout() {
    let url: "http://localhost:8080/logout";
    return this.http.get(url, { withCredentials: true });
  }
}
