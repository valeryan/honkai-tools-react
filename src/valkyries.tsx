import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Valkyrie } from "./types/Valkyrie";
import { setValkyries } from "./data/valkyries";
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
          dps: valk.dps,
          support: valk.support,
        });
      });
      callback(valks);
    } else {
      await setValkyries();
      getValks(callback);
    }
  } catch (error) {
    console.log(error);
  }
};

export function Valkyries() {
  let [valkyries, setValks] = useState<Valkyrie[]>([]);

  useEffect(() => {
    getValks(setValks);
  }, []);

  return (
    <>
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
