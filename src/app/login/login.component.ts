import { Component } from '@angular/core';
import users from "src/assets/user.json";
export interface User {
  email: string;
  password: string;
  token?:string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  newEmail: string = '';
  password: string = '';
  signedEmail: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  phoneNumber: string = '';
  address: string = '';
  newPasswordMessagge: string = '';
  confirmMessage: string = '';
  passwordMessage: string = '';
  userMail:string="";
  userPassword:string="";
  userJson=users.users;
  // users: User[] = [
  //   { email: 'mail@mail.com', password: 'pass1'},
  //   { email: 'chiocciola@mail.it', password: 'pass2' },
  //   { email: 'user@mail.net', password: 'pass3' },
  // ];
  CheckPass() {
    if (this.newPassword.length < 10) {
      this.newPasswordMessagge = 'Too short';
    } else {
      this.newPasswordMessagge = 'Good';
    }
  }

  SamePass() {
    if (this.newPassword == this.confirmPassword) {
      this.confirmMessage = 'Passwords are equal';
    } else {
      this.confirmMessage = 'Passwords are different';
    }
  }

  Access() {
    const user = this.users.find(
      (utente) =>
        utente.email === this.signedEmail && utente.password === this.password
    );
    if (user) {
      console.log('Login success');
    } else {
      console.log('Login failed');
    }
  }

  CheckLogin() {
    if (this.password.length < 10) {
      this.passwordMessage = 'Too short';
    } else {
      this.passwordMessage = 'Good';
    }
  }
}