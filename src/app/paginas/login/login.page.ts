import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) { }

  login() {
    if (this.username === 'jorgeluis' && this.password === '2024') {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Credenciales incorrectas. Inténtalo de nuevo.';
    }
  }
}