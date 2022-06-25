import { useEffect, useState } from "react";
import { setValkryies } from "./data/valkyries";

export function LoadData() {
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let requests = setValkryies();
      await Promise.allSettled(requests);
      setIsLoading(false);
    })();
  }, []);

  return <> {isLoading ? "Working..." : "We loaded er Up!"}
  </>
}
