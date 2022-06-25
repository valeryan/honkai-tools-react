import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { Valkyrie } from "../types/Valkyrie";

async function setValkryie(valk: Valkyrie) {
  const docRef = doc(db, "valkyries", valk.slug);
  await setDoc(docRef, {
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
    slug: "io",
    name: "Mobius",
    battleSuit: "Infinite Ouroboros",
  },
  {
    slug: "sw",
    name: "Bronya Zaychik",
    battleSuit: "Silverwing N-EX",
  },
  {
    slug: "aka",
    name: "Rita Rossweise",
    battleSuit: "Argent Knight Artemis",
  },
  {
    slug: "hofs",
    name: "Kiana Kaslana",
    battleSuit: "Herrscher of Flamescion",
  },
  {
    slug: "da",
    name: "Bianka Ataegina",
    battleSuit: "Dea Anchora",
  },
  {
    slug: "nyx",
    name: '"Seele" Vollerei',
    battleSuit: "Starchasm Nyx",
  },
  {
    slug: "hos",
    name: "Fu Hua",
    battleSuit: "Herrscher of Sentience",
  },
  {
    slug: "hor",
    name: "Bronya Zaychik",
    battleSuit: "Herrscher of Reason",
  },
  {
    slug: "pv",
    name: "Fischl",
    battleSuit: "Prinzessin Der Verurteilung",
  },
  {
    slug: "hot",
    name: "Raiden Mei",
    battleSuit: "Herrscher of Thunder",
  },
  {
    slug: "rvn",
    name: "Natasha Cioara",
    battleSuit: "Midnight Absinthe",
  },
  {
    slug: "ely",
    name: "Elysia",
    battleSuit: "Miss Pink Elf",
  },
  {
    slug: "tp",
    name: "Theresa Apocalypse",
    battleSuit: "Twilight Paladin",
  },
  {
    slug: "vb",
    name: "Raiden Mei",
    battleSuit: "Striker Fulminata",
  },
  {
    slug: "sn",
    name: "Seele Vollerei",
    battleSuit: "Stygian Nymph Seele",
  },
  {
    slug: "bke",
    name: "Durandal",
    battleSuit: "Bright Knight Excelsis",
  },
  {
    slug: "vg",
    name: "Bianka Ataegina",
    battleSuit: "Valkyrie Gloria",
  },
  {
    slug: "ri",
    name: "Kallen Kaslana",
    battleSuit: "Ritual Imayoh",
  },
  {
    slug: "lk",
    name: "Theresa Apocalypse",
    battleSuit: "Luna Kindred",
  },
  {
    slug: "sns",
    name: "Carole Peppers",
    battleSuit: "Sweet 'N Spicy",
  },
];
