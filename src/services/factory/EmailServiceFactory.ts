import exposedEnv from "../../data/exposedEnv";
import { EmailService } from "../EmailService";
import { EmailServiceImpl } from "../impl/EmailServiceImpl";

export function buildEmailService(): EmailService {
  return new EmailServiceImpl(exposedEnv.email);
}
