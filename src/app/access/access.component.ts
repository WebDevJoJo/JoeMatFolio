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
  userslist: User[] = [];
  MyRouter: Router;
  public matchedUser: User | undefined;

  constructor(private http: HttpClient, router: Router) {
    this.MyRouter = router;
    this.userslist = JSON.parse(localStorage.getItem('userslist') || '[]');
  }
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
      .get<{ userslist: User[] }>(
        'C:/Users/melchiorrejo/Projects/JoeMatFolio/src/assets/users.json'
      )
      .subscribe((users) => {
        this.matchedUser = users.userslist.find(
          (user) =>
            user.email === this.signedEmail &&
            user.password === this.loginpasswordts
        );
        if (this.matchedUser) {
          console.log('Login successful');
          localStorage.setItem('isLogged', JSON.stringify(true));
          localStorage.setItem('currentUser', JSON.stringify(this.matchedUser));
          this.MyRouter.navigateByUrl('/personalarea');
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
