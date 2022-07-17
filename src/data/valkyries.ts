import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { VALKYRIES } from '../types/Slug';
import { Valkyrie } from '../types/Valkyrie';

async function setValkyrie(valk: Valkyrie) {
  const docRef = doc(db, 'valkyries', valk.slug);
  await setDoc(docRef, {
    slug: valk.slug,
    name: valk.name,
    battleSuit: valk.battleSuit,
    tagline: valk.tagline? valk.tagline : '',
    description: valk.description? valk.description : '',
    dps: valk.dps,
    support: valk.support,
  });
}

export function setValkyries() {
  return getValkyries().map(setValkyrie);
}

export function getValkyries() {
  return Object.values(valkyries);
}

export const valkyries: { [key in VALKYRIES]: Valkyrie } = {
  [VALKYRIES.INFINITE_OUROBOROS]: {
    slug: VALKYRIES.INFINITE_OUROBOROS,
    name: 'Mobius',
    battleSuit: 'Infinite Ouroboros',
    dps: true,
    support: false,
  },
  [VALKYRIES.SILVERWING_NEX]: {
    slug: VALKYRIES.SILVERWING_NEX,
    name: 'Bronya Zaychik',
    battleSuit: 'Silverwing N-EX',
    dps: true,
    support: false,
  },
  [VALKYRIES.ARGENT_KNIGHT_ARTEMIS]: {
    slug: VALKYRIES.ARGENT_KNIGHT_ARTEMIS,
    name: 'Rita Rossweise',
    battleSuit: 'Argent Knight Artemis',
    dps: true,
    support: false,
  },
  [VALKYRIES.HERRSCHER_OF_FLAMESCION]: {
    slug: VALKYRIES.HERRSCHER_OF_FLAMESCION,
    name: 'Kiana Kaslana',
    battleSuit: 'Herrscher of Flamescion',
    dps: true,
    support: false,
  },
  [VALKYRIES.DEA_ANCHORA]: {
    slug: VALKYRIES.DEA_ANCHORA,
    name: 'Bianka Ataegina',
    battleSuit: 'Dea Anchora',
    dps: true,
    support: false,
  },
  [VALKYRIES.STARCHASM_NYX]: {
    slug: VALKYRIES.STARCHASM_NYX,
    name: '"Seele" Vollerei',
    battleSuit: 'Starchasm Nyx',
    dps: true,
    support: false,
  },
  [VALKYRIES.HERRSCHER_OF_SENTIENCE]: {
    slug: VALKYRIES.HERRSCHER_OF_SENTIENCE,
    name: 'Fu Hua',
    battleSuit: 'Herrscher of Sentience',
    dps: true,
    support: false,
  },
  [VALKYRIES.HERRSCHER_OF_REASON]: {
    slug: VALKYRIES.HERRSCHER_OF_REASON,
    name: 'Bronya Zaychik',
    battleSuit: 'Herrscher of Reason',
    dps: true,
    support: false,
  },
  [VALKYRIES.PRINZESSIN_DER_VERURTEILUNG]: {
    slug: VALKYRIES.PRINZESSIN_DER_VERURTEILUNG,
    name: 'Fischl',
    battleSuit: 'Prinzessin Der Verurteilung',
    dps: true,
    support: false,
  },
  [VALKYRIES.HERRSCHER_OF_THUNDER]: {
    slug: VALKYRIES.HERRSCHER_OF_THUNDER,
    name: 'Raiden Mei',
    battleSuit: 'Herrscher of Thunder',
    dps: true,
    support: false,
  },
  [VALKYRIES.MIDNIGHT_ABSINTHE]: {
    slug: VALKYRIES.MIDNIGHT_ABSINTHE,
    name: 'Natasha Cioara',
    battleSuit: 'Midnight Absinthe',
    dps: true,
    support: false,
  },
  [VALKYRIES.MISS_PINK_ELF]: {
    slug: VALKYRIES.MISS_PINK_ELF,
    name: 'Elysia',
    battleSuit: 'Miss Pink Elf',
    dps: true,
    support: false,
  },
  [VALKYRIES.TWILIGHT_PALADIN]: {
    slug: VALKYRIES.TWILIGHT_PALADIN,
    name: 'Theresa Apocalypse',
    battleSuit: 'Twilight Paladin',
    dps: true,
    support: false,
  },
  [VALKYRIES.STRIKER_FULMINATA]: {
    slug: VALKYRIES.STRIKER_FULMINATA,
    name: 'Raiden Mei',
    battleSuit: 'Striker Fulminata',
    dps: true,
    support: false,
  },
  [VALKYRIES.STYGIAN_NYMPH]: {
    slug: VALKYRIES.STYGIAN_NYMPH,
    name: 'Seele Vollerei',
    battleSuit: 'Stygian Nymph',
    dps: true,
    support: false,
  },
  [VALKYRIES.BRIGHT_KNIGHT_EXCELSIS]: {
    slug: VALKYRIES.BRIGHT_KNIGHT_EXCELSIS,
    name: 'Durandal',
    battleSuit: 'Bright Knight Excelsis',
    dps: true,
    support: false,
  },
  [VALKYRIES.VALKYRIE_GLORIA]: {
    slug: VALKYRIES.VALKYRIE_GLORIA,
    name: 'Bianka Ataegina',
    battleSuit: 'Valkyrie Gloria',
    dps: true,
    support: false,
  },
  [VALKYRIES.RITUAL_IMAYOH]: {
    slug: VALKYRIES.RITUAL_IMAYOH,
    name: 'Kallen Kaslana',
    battleSuit: 'Ritual Imayoh',
    dps: true,
    support: false,
  },
  [VALKYRIES.LUNA_KINDRED]: {
    slug: VALKYRIES.LUNA_KINDRED,
    name: 'Theresa Apocalypse',
    battleSuit: 'Luna Kindred',
    dps: true,
    support: false,
  },
  [VALKYRIES.SWEET_N_SPICY]: {
    slug: VALKYRIES.SWEET_N_SPICY,
    name: 'Carole Peppers',
    battleSuit: "Sweet 'N Spicy",
    dps: true,
    support: false,
  },
  [VALKYRIES.VALKYRIE_CHARIOT]: {
    slug: VALKYRIES.VALKYRIE_CHARIOT,
    name: 'Bronya Zaychik',
    battleSuit: 'Valkyrie Chariot',
    tagline: 'Black Hole',
    description:
      'Valkyrie Chariot unleashes a black hole to gather enemies nearby and bleed them. CD: 30s.',
    dps: false,
    support: true,
  },
  [VALKYRIES.DIVINE_PRAYER]: {
    slug: VALKYRIES.DIVINE_PRAYER,
    name: 'Kiana Kaslana',
    battleSuit: 'Divine Prayer',
    tagline: 'Divine Retribution',
    description:
      'Divine Prayer creates a global time fracture during which enemies suffer from Divine Penalty, take Lightning DMG, and stay impaired. CD: 40s.',
    dps: false,
    support: true,
  },
  [VALKYRIES.SNOWY_SNIPER]: {
    slug: VALKYRIES.SNOWY_SNIPER,
    name: 'Bronya Zaychik',
    battleSuit: 'Snowy Sniper',
    tagline: 'Arctic Snow',
    description:
      'Snowy Sniper summons Arctic Snow to freeze enemies and make them take bonus Physical DMG. CD: 60s.',
    dps: false,
    support: true,
  },
  [VALKYRIES.LIGHTNING_EMPRESS]: {
    slug: VALKYRIES.LIGHTNING_EMPRESS,
    name: 'Raiden Mei',
    battleSuit: 'Lightning Empress',
    tagline: 'Lightning Charge',
    description: 'Lightning Empress restores SP for the Valkyrie deployed.',
    dps: false,
    support: true,
  },
  [VALKYRIES.VERMILION_KNIGHT_ECLIPSE]: {
    slug: VALKYRIES.VERMILION_KNIGHT_ECLIPSE,
    name: 'Murata Himeko',
    battleSuit: 'Vermilion Knight: Eclipse',
    tagline: 'Ravaging Flame',
    description:
      'Vermilion Knight: Eclipse wields Might of An-Utu to deal massive AoE Fire DMG (reduced below Difficulty 85) and ignite enemies. CD: 60s.',
    dps: false,
    support: true,
  },
  [VALKYRIES.BRIGHT_KNIGHT_EXCELSIS]: {
    slug: VALKYRIES.BRIGHT_KNIGHT_EXCELSIS,
    name: 'Durandal',
    battleSuit: 'Bright Knight: Excelsis',
    tagline: 'Knightly Bulwark',
    description:
      'Bright Knight: Excelsis deals hight Physical DMG (reduced below Difficulty 85) and blocks all attacks for the Valkyrie deployed in a short duration. CD: 30s.',
    dps: false,
    support: true,
  },
  [VALKYRIES.AZURE_EMPYREA]: {
    slug: VALKYRIES.AZURE_EMPYREA,
    name: 'Fu Hua',
    battleSuit: 'Azure Empyrea',
    tagline: 'Empyrean Sunder',
    description:
      'Azure Empyrea casts Empyrean Sunder to gather enemies, deal AoE Fire DMG (reduced below Difficulty 85), and enhance the Valkyrie deployed. CD: 50s.',
    dps: false,
    support: true,
  },
  [VALKYRIES.BLOOD_ROSE]: {
    slug: VALKYRIES.BLOOD_ROSE,
    name: 'Murata Himeko',
    battleSuit: 'Blood Rose',
    tagline: 'Blood Boost',
    description:
      'Blood Rose enables the Valkyrie deployed to consume HP for a huge Total DMG boost.',
    dps: false,
    support: true,
  },
};
