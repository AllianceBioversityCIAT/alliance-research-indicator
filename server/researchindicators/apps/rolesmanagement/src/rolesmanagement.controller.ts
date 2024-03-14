import { Controller } from '@nestjs/common';
import { RolesManagementService } from './rolesmanagement.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class RolesManagementController {
  constructor(
    private readonly rolesManagementService: RolesManagementService,
  ) {}

  @EventPattern('new_role')
  handleNewEmail(email: any) {
    this.rolesManagementService.sendEmail(email);
  }
}
