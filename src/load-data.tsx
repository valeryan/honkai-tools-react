import { useEffect, useState } from "react";
import { deleteAll, setEmblems, setSignets, setSupports, setValkryies } from "./data";

export function LoadData() {
  let [isValkLoading, setValkIsLoading] = useState(true);
  let [isSupportLoading, setSupportIsLoading] = useState(true);
  let [isSignetLoading, setSignetIsLoading] = useState(true);
  let [isEmblemLoading, setEmblemIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await deleteAll();
      let valkRequests = setValkryies();
      let supportRequest = setSupports();
      let signetRequest = setSignets();
      let emblemRequest = setEmblems();

      Promise.allSettled(valkRequests).then(() => setValkIsLoading(false));
      Promise.allSettled(supportRequest).then(() => setSupportIsLoading(false));
      Promise.allSettled(signetRequest).then(() => setSignetIsLoading(false));
      Promise.allSettled(emblemRequest).then(() => setEmblemIsLoading(false));
    })();
  }, []);

  return (
    <>
      <h2>Valkryies: {isValkLoading ? "Updating" : "Updated"}</h2>
      <h2>Supports: {isSupportLoading ? "Updating" : "Updated"}</h2>
      <h2>Signets: {isSignetLoading ? "Updating" : "Updated"}</h2>
      <h2>Emblems: {isEmblemLoading ? "Updating" : "Updated"}</h2>
    </>
  );
}
