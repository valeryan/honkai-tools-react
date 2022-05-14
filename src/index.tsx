import { setValkryies } from "./data/dataLoader";
import { Typography } from "@mui/material";
import { ReactElement, useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Valkyrie } from "./types/Valkyrie";
import "./index.css";

// ========================================
// Add a new collection.
const valkRef = collection(db, "valkyries");

function App() {
  let [valkyries, setValks] = useState<Valkyrie[]>([]);
  const getValks = useCallback(async () => {
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
        setValks(valks);
      } else {
        await setValkryies();
        getValks();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getValks();
  }, [getValks]);

  const valkBlocks: ReactElement[] = [];

  valkyries.forEach((data) => {
    valkBlocks.push(
      <Typography variant="h3" gutterBottom key={data.slug}>
        {data.name} - {data.battleSuit}
      </Typography>
    );
  });
  return (
    <>
      <Typography variant="h1" gutterBottom>
        Honkai Tools
      </Typography>
      {valkBlocks}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
