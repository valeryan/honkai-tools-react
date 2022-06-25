import { setDoc, doc } from "firebase/firestore";
import {db} from '../firebase';
import { Support } from "../types/Support";

async function setSupport(support:Support) {
  const supportDocRef = doc(db, "supports", support.slug);
  await setDoc(supportDocRef, {
    name: support.name,
    tagline: support.tagline,
    description: support.description,
    slug: support.slug,
  });
}

export function setSupports() {
  supports.map(setSupport);
}

export const supports: Support[] = [
  {
    name: "Valkyrie Chariot",
    tagline: "Black Hole",
    description:
      "Valkyrie Chariot unleashes a black hole to gather enemies nearby and bleed them. CD: 30s.",
    slug: "VC",
  },
  {
    name: "Divine Prayer",
    tagline: "Divine Retribution",
    description:
      "Divine Prayer creates a global time fracture during which enemies suffer from Divine Penalty, take Lightning DMG, and stay impaired. CD: 40s.",
    slug: "DP",
  },
  {
    name: "Snowy Sniper",
    tagline: "Arctic Snow",
    description:
      "Snowy Sniper summons Arctic Snow to freeze enemies and make them take bonus Physical DMG. CD: 60s.",
    slug: "SS",
  },
  {
    name: "Lightning Empress",
    tagline: "Lightning Charge",
    description: "Lightning Empress restores SP for the Valkyrie deployed.",
    slug: "LE",
  },
  {
    name: "Vermilion Knight: Eclipse",
    tagline: "Ravaging Flame",
    description:
      "Vermilion Knight: Eclipse wields Might of An-Utu to deal massive AoE Fire DMG (reduced below Difficulty 85) and ignite enemies. CD: 60s.",
    slug: "VKE",
  },
  {
    name: "Bright Knight: Excelsis",
    tagline: "Knightly Bulwark",
    description:
      "Bright Knight: Excelsis deals hight Physical DMG (reduced below Difficulty 85) and blocks all attacks for the Valkyrie deployed in a short duration. CD: 30s.",
    slug: "BKE",
  },
  {
    name: "Azure Empyrea",
    tagline: "Empyrean Sunder",
    description:
      "Azure Empyrea casts Empyrean Sunder to gather enemies, deal AoE Fire DMG (reduced below Difficulty 85), and enhance the Valkyrie deployed. CD: 50s.",
    slug: "AE",
  },
  {
    name: "Blood Rose",
    tagline: "Blood Boost",
    description:
      "Blood Rose enables the Valkyrie deployed to consume HP for a huge Total DMG boost.",
    slug: "BR",
  },
];
