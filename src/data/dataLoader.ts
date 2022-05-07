import { setDoc, doc } from "firebase/firestore";
import {db} from '../firebase';
import { Valkyrie } from "../types/Valkyrie";
import { valkyries } from "./valkyries";

async function setValkryie(valk:Valkyrie) {
  const valkDocRef = doc(db, "valkyries", valk.slug);
  await setDoc(valkDocRef, {
    valk
  });
}

export function setValkryies() {
  valkyries.map(setValkryie);
}
