import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss'],
})
export class AccessComponent {
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
    { email: 'joelemelchiorre@gmail.com', password: 'passwordjoele' },
    { email: 'chiocciola@mail.it', password: 'passwordmattia' },
    { email: 'user@provider.domain', password: 'passworduser3' },
  ];

  checkPass() {
    if (this.newPassword.length < 10) {
      this.newPasswordMessagge = 'Too short';
    } else {
      this.newPasswordMessagge = 'Good';
    }
  }

  samePass() {
    if (this.newPassword == this.confirmPassword) {
      this.confirmMessage = 'Passwords are equal';
    } else {
      this.confirmMessage = 'Passwords are different';
    }
  }

  accessResult() {
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

  checkLogin() {
    if (this.password.length < 10) {
      this.passwordMessage = 'Invalid credentials';
    }
  }
}
