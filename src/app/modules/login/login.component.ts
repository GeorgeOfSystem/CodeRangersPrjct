import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    if (this.authService.verifyLogged()) {
      this.router.navigate(["home"]);
    }
  }

  onLogin(form: any) {
    console.log("Form", form.value);
    this.authService
      .login({
        email: form.value.email,
        password: form.value.password,
        returnSecureToken: true
      })
      .subscribe(
        res => {
          if (form.value.email == "ministerio@bo.com") {
            console.log("LOGIN RESPONSE: ", res);
            this.router.navigate(["home"]);
          }else {
            this.router.navigate(["auditHome"]);
          }
        },
        err => {
          console.log("LOGIN ERROR: ");
        }
      );
  }

  onRegister() {
    this.router.navigate(['register']);
    console.log("Arreglar");
  }
}
