import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  email: string;
  password: string;
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
  users: User[] = [
    { email: 'joelemelchiorre@gmail.com', password: 'JoelePWD' },
    { email: 'chiocciola@mail.it', password: 'MattiaPWD' },
    { email: 'user@provider.domain', password: 'User3PWD' },
  ];

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
