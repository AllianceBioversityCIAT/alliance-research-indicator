import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/global-dto/auditable.entity';
import { Result } from '../../results/entities/result.entity';
import { ClarisaLanguage } from '../../../tools/clarisa/entities/clarisa-languages/entities/clarisa-language.entity';
import { LanguageRole } from '../../language-roles/entities/language-role.entity';

@Entity('result_languages')
export class ResultLanguage extends AuditableEntity {
  @PrimaryGeneratedColumn({
    name: 'result_language_id',
    type: 'bigint',
  })
  result_language_id!: number;

  @Column('bigint', {
    name: 'result_id',
    nullable: false,
  })
  result_id!: number;

  @Column('bigint', {
    name: 'language_id',
    nullable: false,
  })
  language_id!: number;

  @Column('bigint', {
    name: 'language_role_id',
    nullable: false,
  })
  language_role_id!: number;

  @ManyToOne(() => LanguageRole, (role) => role.result_languages)
  @JoinColumn({ name: 'language_role_id' })
  language_role!: LanguageRole;

  @ManyToOne(() => Result, (result) => result.result_languages)
  @JoinColumn({ name: 'result_id' })
  result!: Result;

  @ManyToOne(() => ClarisaLanguage, (language) => language.result_languages)
  @JoinColumn({ name: 'language_id' })
  language!: ClarisaLanguage;
}
