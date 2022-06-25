import { collection, deleteDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export * from "./emblems";
export * from "./signets";
export * from "./supports";
export * from "./valkyries";

export async function deleteAll() {
  const valkRef = collection(db, "valkyries");
  const valkSnap = await getDocs(valkRef);

  if (!valkSnap.empty) {
    valkSnap.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  }

  const sigRef = collection(db, "signets");
  const sigSnap = await getDocs(sigRef);

  if (!sigSnap.empty) {
    sigSnap.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  }

  const supRef = collection(db, "supports");
  const supSnap = await getDocs(supRef);

  if (!supSnap.empty) {
    supSnap.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  }

  const embRef = collection(db, "emblems");
  const embSnap = await getDocs(embRef);

  if (!embSnap.empty) {
    embSnap.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  }
}
