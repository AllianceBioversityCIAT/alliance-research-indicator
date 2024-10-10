import { Injectable } from '@nestjs/common';
import { ResultLeversRepository } from './repositories/result-levers.repository';
import { EntityManager, Repository } from 'typeorm';
import { ResultLever } from './entities/result-lever.entity';
import { selectManager } from '../../shared/utils/orm.util';
import { BaseServiceSimple } from '../../shared/global-dto/base-service';

@Injectable()
export class ResultLeversService extends BaseServiceSimple<
  ResultLever,
  ResultLeversRepository
> {
  constructor(customRepo: ResultLeversRepository) {
    super(ResultLever, customRepo, 'result_id', 'lever_role_id');
  }

  async deleteAll(result_id: number, manager?: EntityManager) {
    const entityManager: Repository<ResultLever> = selectManager(
      manager,
      ResultLever,
      this.mainRepo,
    );

    const response = await entityManager.update(
      { result_id: result_id },
      { is_active: false },
    );

    return response;
  }
}
