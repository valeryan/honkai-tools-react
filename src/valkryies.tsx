import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Valkyrie } from "./types/Valkyrie";
import { setValkryies } from "./data/valkyries";
import "./index.css";

// ========================================
// Add a new collection.
const valkRef = collection(db, "valkyries");

const getValks = async (callback: (valks: Valkyrie[]) => void) => {
  try {
    const docSnap = await getDocs(valkRef);

    if (!docSnap.empty) {
      const valks: Valkyrie[] = [];
      docSnap.forEach((doc) => {
        let valk: any = doc.data();
        valks.push({
          slug: valk.slug,
          name: valk.name,
          battleSuit: valk.battleSuit,
        });
      });
      callback(valks);
    } else {
      await setValkryies();
      getValks(callback);
    }
  } catch (error) {
    console.log(error);
  }
};

export function Valkryies() {
  let [valkyries, setValks] = useState<Valkyrie[]>([]);

  useEffect(() => {
    getValks(setValks);
  }, []);

  return (
    <>
      <Typography variant="h1" gutterBottom>
        Honkai Tools
      </Typography>
      {valkyries.map((data) => {
        return (
          <Typography variant="h3" gutterBottom key={data.slug}>
            {data.name} - {data.battleSuit}
          </Typography>
        );
      })}
    </>
  );
}
