import { Injectable } from '@nestjs/common';
import { ResultInstitution } from './entities/result-institution.entity';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { InstitutionRolesEnum } from '../institution-roles/enums/institution-roles.enum';
import { CreateResultInstitutionDto } from './dto/create-result-institution.dto';
import { BaseServiceSimple } from '../../shared/global-dto/base-service';
@Injectable()
export class ResultInstitutionsService extends BaseServiceSimple<
  ResultInstitution,
  Repository<ResultInstitution>
> {
  constructor(private dataSource: DataSource) {
    super(
      ResultInstitution,
      dataSource.getRepository(ResultInstitution),
      'result_id',
      'institution_role_id',
    );
  }

  async updatePartners(
    resultId: number,
    resultInstitution: CreateResultInstitutionDto,
  ) {
    return this.dataSource.transaction(async (manager) => {
      const { institutions } = resultInstitution;
      const resResultInstitution = await this.create<InstitutionRolesEnum>(
        resultId,
        institutions,
        'institution_id',
        InstitutionRolesEnum.PARTNERS,
        manager,
      );

      return resResultInstitution;
    });
  }

  async findInstitutionsByRoleResult(
    resultId: number,
    institution_role_id: InstitutionRolesEnum,
  ) {
    return this.mainRepo.find({
      where: {
        institution_role_id: institution_role_id,
        result_id: resultId,
        is_active: true,
      },
    });
  }

  async findOneInstitutionByRoleResult(
    resultId: number,
    institution_role_id: InstitutionRolesEnum,
  ) {
    return this.mainRepo.findOne({
      where: {
        institution_role_id: institution_role_id,
        result_id: resultId,
        is_active: true,
      },
    });
  }

  async findAll(resultId: number, institution_role_id?: InstitutionRolesEnum) {
    const where: FindOptionsWhere<ResultInstitution> = {};

    if (institution_role_id) {
      where.institution_role_id = institution_role_id;
    }

    return this.mainRepo.find({
      where: {
        ...where,
        result_id: resultId,
        is_active: true,
      },
    });
  }
}