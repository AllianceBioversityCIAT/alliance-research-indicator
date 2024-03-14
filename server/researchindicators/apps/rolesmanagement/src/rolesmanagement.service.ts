import { Injectable } from '@nestjs/common';

@Injectable()
export class RolesManagementService {
  sendEmail(email: any): string {
    console.log('New notification received', email);
    return 'thanks to your email was set'; // Add a return statement here
  }
}
