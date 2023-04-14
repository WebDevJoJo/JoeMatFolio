import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  loginpasswordts: string = '';
  signedEmail: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  phoneNumber: string = '';
  address: string = '';
  newPasswordMessagge: string = '';
  confirmMessage: string = '';
  passwordMessage: string = '';
  userlist: User[] = [];
  constructor(private http: HttpClient) {}
  checkPasswordLenght() {
    if (this.newPassword.length < 10) {
      this.newPasswordMessagge = 'Too short';
    } else {
      this.newPasswordMessagge = 'Good';
    }
  }

  checkPasswordsEquality() {
    if (this.newPassword == this.confirmPassword) {
      this.confirmMessage = 'Passwords are equal';
    } else {
      this.confirmMessage = 'Passwords are different';
    }
  }

  accessResult() {
    this.http
      .get<{ userlist: User[] }>(
        'C:/Users/melchiorrejo/Projects/JoeMatFolio/src/assets/users.json'
      )
      .subscribe((users) => {
        const matchedUser = users.userlist.find(
          (user) =>
            user.email === this.signedEmail &&
            user.password === this.loginpasswordts
        );
        if (matchedUser) {
          console.log('Login successful');
        } else {
          console.log('Login failed');
        }
      });
  }

  checkLoginCredentials() {
    if (this.loginpasswordts.length < 10) {
      this.passwordMessage = 'Invalid credentials';
    }
  }
}
