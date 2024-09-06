import { LicenseType } from '../enums/licensetype.enum';

export interface LicenseOptions {
  type: LicenseType;
  customText?: string | undefined;
}
