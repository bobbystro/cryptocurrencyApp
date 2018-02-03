export class ContactModel {
  public contactName: string;
  public contactEmail: string;
  public contactMessage: string;

  constructor(contactName = '', contactEmail = '', contactMessage = '') {
    this.contactName = contactName;
    this.contactEmail = contactEmail;
    this.contactMessage = contactMessage;
  }
}
