import { setDoc, doc } from "firebase/firestore";
import {db} from '../firebase';
import { Valkyrie } from "../types/Valkyrie";

async function setValkryie(valk:Valkyrie) {
  const valkDocRef = doc(db, "valkyries", valk.slug);
  await setDoc(valkDocRef, {
    slug: valk.slug,
    name: valk.name,
    battleSuit: valk.battleSuit,
  });
}

export function setValkryies() {
  return valkyries.map(setValkryie);
}

export const valkyries: Valkyrie[] = [
  {
    slug: "IO",
    name: "Mobius",
    battleSuit: "Infinite Ouroboros",
  },
  {
    slug: "SW",
    name: "Bronya Zaychik",
    battleSuit: "Silverwing N-EX",
  },
  {
    slug: "AKA",
    name: "Rita Rossweise",
    battleSuit: "Argent Knight Artemis",
  },
  {
    slug: "HOFS",
    name: "Kiana Kaslana",
    battleSuit: "Herrscher of Flamescion",
  },
  {
    slug: "DA",
    name: "Bianka Ataegina",
    battleSuit: "Dea Anchora",
  },
  {
    slug: "NYX",
    name: '"Seele" Vollerei',
    battleSuit: "Starchasm Nyx",
  },
  {
    slug: "HOS",
    name: "Fu Hua",
    battleSuit: "Herrscher of Sentience",
  },
  {
    slug: "HOR",
    name: "Bronya Zaychik",
    battleSuit: "Herrscher of Reason",
  },
  {
    slug: "PV",
    name: "Fischl",
    battleSuit: "Prinzessin Der Verurteilung",
  },
  {
    slug: "HOT",
    name: "Raiden Mei",
    battleSuit: "Herrscher of Thunder",
  },
  {
    slug: "RVN",
    name: "Natasha Cioara",
    battleSuit: "Midnight Absinthe",
  },
  {
    slug: "ELY",
    name: "Elysia",
    battleSuit: "Miss Pink Elf",
  },
  {
    slug: "TP",
    name: "Theresa Apocalypse",
    battleSuit: "Twilight Paladin",
  },
  {
    slug: "VB",
    name: "Raiden Mei",
    battleSuit: "Striker Fulminata",
  },
  {
    slug: "SN",
    name: "Seele Vollerei",
    battleSuit: "Stygian Nymph Seele",
  },
  {
    slug: "BKE",
    name: "Durandal",
    battleSuit: "Bright Knight Excelsis",
  },
  {
    slug: "VG",
    name: "Bianka Ataegina",
    battleSuit: "Valkyrie Gloria",
  },
  {
    slug: "RI",
    name: "Kallen Kaslana",
    battleSuit: "Ritual Imayoh",
  },
  {
    slug: "LK",
    name: "Theresa Apocalypse",
    battleSuit: "Luna Kindred",
  },
  {
    slug: "SNS",
    name: "Carole Peppers",
    battleSuit: "Sweet 'N Spicy",
  }
];
