import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  message: string = '';
  username: string = '';
  domain: string = '';
  subject: string = '';
  usermessage: string = '';
  showinfo() {
    if (this.username && this.domain && this.subject && this.usermessage) {
      this.message =
        'Username: ' +
        this.username +
        '@' +
        this.domain +
        ' Subject: ' +
        this.subject +
        ' Message: ' +
        this.usermessage;
    } else {
      this.message = 'You cannot leave this field blank';
    }
  }
}
