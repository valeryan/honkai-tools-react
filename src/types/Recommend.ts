export enum ChoiceOptions {
  first = "1st",
  second = "2nd",
  start = "Start",
  filler = "Filler"
}

export interface Choice {
  signetSlug: string;
  choice: ChoiceOptions;
}

export interface ChoiceGroup {
  signet: string;
  choices: Choice[];
}

export interface Slots {
  [index: string]: any;
  slot1: string;
  slot2?: string;
}

export interface SetupTypes {
  emblem: Slots,
  support: Slots
}

export interface GamePeriod {
  early: SetupTypes;
  mid: SetupTypes;
  late: SetupTypes;
}

export interface Recommend {
  slug: string;
  difficulty: number;
  rank: string;
  variant?: string;
  isActive?: boolean;
  exclusive: ChoiceGroup;
  signet1: ChoiceGroup;
  signet2: ChoiceGroup;
  signet3: ChoiceGroup;
  setup: GamePeriod;
}
