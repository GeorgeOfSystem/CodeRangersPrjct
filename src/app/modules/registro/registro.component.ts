import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  returnLogin() {
    this.router.navigate(['login'])
  }

  onRegister(form: any){
    console.log(form.value)
    this.auth.register({
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }).subscribe(
      res => {
        alert(`Se registro a la empresa ${form.value.name}`);
        //TODO guardar el usuario en la base de datos
        this.router.navigate(['login'])
      },
      err => {
        console.log("ERROR:", err);
      }
    );
  }

}
