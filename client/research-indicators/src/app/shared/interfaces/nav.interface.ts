export interface NavOptions {
  label: string;
  items: NavOption[];
}

interface NavOption {
  label: string;
  icon: string;
}

export interface AllianceNavOptions {
  label: string;
  path: string;
  icon?: string;
}
