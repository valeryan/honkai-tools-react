import { BaseType } from "./BaseType";

export interface Signet extends BaseType {
  description: string;
  type: string;
  nexus?: string;
  choice?: string;
}

export interface SignetGroup extends BaseType {
  flameChaser: string;
  signets: Signet[];
}

export interface SignetChoice {
  signetSlug: string;
  choice: string;
}
