import { Button, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getDoc, setDoc, doc } from "firebase/firestore"; 
import {db} from './firebase';
import './index.css';

// ========================================
// Add a new document with a generated id.
const numberDocRef = doc(db, "numbers", "number");

async function setDBNumber(value:number) {
  await setDoc(numberDocRef, {
    value
  });
}

function App() {
  let [number, setNumber] = useState<any>(null);

  const getNumber = useCallback( async () => {
    try {
      const docSnap = await getDoc(numberDocRef);
      
      if (docSnap.exists()) {
        setNumber(docSnap.data().value);
      } else {
        await setDBNumber(0);
        getNumber();
      }
    } catch(error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getNumber();
  }, [getNumber]);
  
  useEffect(() => {
    if (number !== null) {
      setDBNumber(number);
    }
  }, [number]);

  return (
    <>
      <Typography variant="h1" gutterBottom>
        Honkai Tools
      </Typography>
      <Button onClick={() => {setNumber(number+1)}} variant="outlined">Add</Button>
      <Typography variant="h3" gutterBottom>{number?? 0}</Typography>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
