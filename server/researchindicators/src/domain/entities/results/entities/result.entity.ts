import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/global-dto/auditable.entity';
import { Indicator } from '../../indicators/entities/indicator.entity';
import { ClarisaGeoScope } from '../../../tools/clarisa/entities/clarisa-geo-scope/entities/clarisa-geo-scope.entity';
import { ResultContract } from '../../result-contracts/entities/result-contract.entity';
import { ResultLever } from '../../result-levers/entities/result-lever.entity';

@Entity('results')
export class Result extends AuditableEntity {
  @PrimaryGeneratedColumn({
    name: 'result_id',
    type: 'bigint',
  })
  result_id!: number;

  @Column('bigint', {
    name: 'result_official_code',
    nullable: false,
  })
  result_official_code!: number;

  @Column('bigint', {
    name: 'version_id',
    nullable: true,
  })
  version_id?: number;

  @Column('text', {
    name: 'title',
    nullable: true,
  })
  title?: string;

  @Column('text', {
    name: 'description',
    nullable: true,
  })
  description?: string;

  @Column('bigint', {
    name: 'indicator_id',
    nullable: true,
  })
  indicator_id?: number;

  @Column('bigint', {
    name: 'geo_scope_id',
    nullable: true,
  })
  geo_scope_id?: number;

  @ManyToOne(() => Indicator, (indicator) => indicator.results)
  @JoinColumn({ name: 'indicator_id' })
  indicator!: Indicator;

  @ManyToOne(() => ClarisaGeoScope, (indicator) => indicator.results)
  @JoinColumn({ name: 'geo_scope_id' })
  geo_scope!: ClarisaGeoScope;

  @OneToMany(() => ResultContract, (resultContract) => resultContract.result)
  result_contracts!: ResultContract[];

  @OneToMany(() => ResultLever, (resultLever) => resultLever.result)
  result_levers!: ResultLever[];
}
