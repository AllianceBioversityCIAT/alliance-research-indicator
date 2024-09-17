import { Module } from '@nestjs/common';
import { ClarisaService } from './clarisa.service';
import { ClarisaLeversModule } from './entities/clarisa-levers/clarisa-levers.module';
import { ClarisaSubNationalsModule } from './entities/clarisa-sub-nationals/clarisa-sub-nationals.module';
import { ClarisaRegionsModule } from './entities/clarisa-regions/clarisa-regions.module';
import { ClarisaCountriesModule } from './entities/clarisa-countries/clarisa-countries.module';
import { ClarisaInstitutionsModule } from './entities/clarisa-institutions/clarisa-institutions.module';
import { ClarisaGeoScopeModule } from './entities/clarisa-geo-scope/clarisa-geo-scope.module';
import { ClarisaLanguagesModule } from './entities/clarisa-languages/clarisa-languages.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [ClarisaService],
  imports: [
    ClarisaGeoScopeModule,
    ClarisaInstitutionsModule,
    ClarisaCountriesModule,
    ClarisaRegionsModule,
    ClarisaSubNationalsModule,
    ClarisaLeversModule,
    ClarisaLanguagesModule,
    HttpModule,
  ],
})
export class ClarisaModule {}
