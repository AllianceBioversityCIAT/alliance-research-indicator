import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { AuditableEntity } from '../../../../../shared/global-dto/auditable.entity';
import { ResultCountry } from '../../../../../entities/result-countries/entities/result-country.entity';

@Entity('clarisa_countries')
export class ClarisaCountry extends AuditableEntity {
  @PrimaryColumn('bigint', {
    name: 'code',
    primary: true,
    nullable: false,
  })
  code!: number;

  @Column('varchar', {
    length: 3,
    name: 'isoAlpha2',
    nullable: true,
  })
  isoAlpha2!: string;

  @Column('varchar', {
    length: 4,
    name: 'isoAlpha3',
    nullable: true,
  })
  isoAlpha3!: string;

  @Column('text', {
    name: 'name',
    nullable: true,
  })
  name!: string;

  @Column('decimal', {
    name: 'longitude',
    nullable: true,
    precision: 8,
    scale: 4,
  })
  longitude!: number;

  @Column('decimal', {
    name: 'latitude',
    nullable: true,
    precision: 8,
    scale: 4,
  })
  latitude!: number;

  @OneToMany(() => ResultCountry, (resultCountry) => resultCountry.country)
  result_countries!: ResultCountry[];
}