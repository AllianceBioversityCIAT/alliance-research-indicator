import { Module } from '@nestjs/common';
import { RolesManagementController } from './rolesmanagement.controller';
import { RolesManagementService } from './rolesmanagement.service';

@Module({
  imports: [],
  controllers: [RolesManagementController],
  providers: [RolesManagementService],
})
export class RolesManagementModule {}
