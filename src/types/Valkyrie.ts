import { BaseType } from "./BaseType";

export interface Valkyrie extends BaseType {
  slug: string;
  battleSuit: string;
  tagline?: string;
  dps: boolean;
  support: boolean;
}
