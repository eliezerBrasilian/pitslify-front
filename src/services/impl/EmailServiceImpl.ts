import { EmailService } from "../EmailService";

export class EmailServiceImpl implements EmailService {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  public sendEmail = (subject: string, body: string) => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    window.location.href = `mailto:${this.email}?subject=${encodedSubject}&body=${encodedBody}`;
  };
}
