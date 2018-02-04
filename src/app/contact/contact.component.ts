import {Component, OnInit} from '@angular/core';
import {ContactModel} from './contact.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: ContactModel;
  successMessage = false;

  constructor() {
  }

  messageForm: FormGroup;

  ngOnInit() {
    this.contactForm = new ContactModel();
    this.messageForm = new FormGroup({
      'contactName': new FormControl(this.contactForm.contactName, [Validators.required, Validators.minLength(2)]),
      'contactEmail': new FormControl(this.contactForm.contactEmail, [Validators.required, Validators.email]),
      'contactMessage': new FormControl(this.contactForm.contactMessage, Validators.required)
    });
  }

  get contactNameForm() {
    return this.messageForm.get('contactName');
  }

  get contactEmailForm() {
    return this.messageForm.get('contactEmail');
  }

  get contactMessageForm() {
    return this.messageForm.get('contactMessage');
  }

  showSuccessMessage() {
    this.successMessage = true;
  }
}
