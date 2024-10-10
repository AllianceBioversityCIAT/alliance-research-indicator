export enum InstitutionRolesEnum {
  TRAINEE_AFFILIATION = 1,
  TRAINEE_ORGANIZATION_REPRESENTATIVE = 2,
  PARTNERS = 3,
}

export enum QueryInstitutionsRolesEnum {
  TRAINEE_AFFILIATION = 'trainee-affiliation',
  TRAINEE_ORGANIZATION_REPRESENTATIVE = 'trainee-organization-representative',
  PARTNERS = 'partners',
}

export class QueryInstitutionsRoles {
  public static readonly traineeAffiliation = new QueryInstitutionsRoles(
    QueryInstitutionsRolesEnum.TRAINEE_AFFILIATION,
    InstitutionRolesEnum.TRAINEE_AFFILIATION,
  );

  public static readonly traineeOrganizationRepresentative =
    new QueryInstitutionsRoles(
      QueryInstitutionsRolesEnum.TRAINEE_ORGANIZATION_REPRESENTATIVE,
      InstitutionRolesEnum.TRAINEE_ORGANIZATION_REPRESENTATIVE,
    );

  public static readonly partners = new QueryInstitutionsRoles(
    QueryInstitutionsRolesEnum.PARTNERS,
    InstitutionRolesEnum.PARTNERS,
  );

  constructor(
    public name: QueryInstitutionsRolesEnum,
    public value: InstitutionRolesEnum,
  ) {}

  public static getFromName(
    name: QueryInstitutionsRolesEnum,
  ): QueryInstitutionsRoles | undefined {
    return (Object.values(this) as QueryInstitutionsRoles[]).find(
      (n) => n.name === name,
    );
  }

  public static getFromValue(
    value: InstitutionRolesEnum,
  ): QueryInstitutionsRoles | undefined {
    return (Object.values(this) as QueryInstitutionsRoles[]).find(
      (n) => n.value === value,
    );
  }
}