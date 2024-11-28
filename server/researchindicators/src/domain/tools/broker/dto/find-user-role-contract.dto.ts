import { ApiProperty } from '@nestjs/swagger';

export class FindUserRoleContractDto {
  @ApiProperty({
    description: 'User ID',
    example: 1,
  })
  user_id!: number;

  @ApiProperty({
    description: 'Role ID',
    example: 1,
  })
  role_id!: number;
}