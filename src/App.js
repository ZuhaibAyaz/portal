import './App.css';
import Papa from 'papaparse';
import {useEffect} from 'react';

import Report from "./Report.csv";

function countOccurrences(csvData) {
  let activeCount = 0;
  let drowsyCount = 0;
  let sleepingCount = 0;

  csvData.forEach((row) => {
    const status = row.status; 

    switch (status) {
      case 'Active':
        activeCount++;
        break;
      case 'Drowsy':
        drowsyCount++;
        break;
      case 'Sleeping':
        sleepingCount++;
        break;
    }
  });

  
  console.log('Active Count:', activeCount);
  console.log('Drowsy Count:', drowsyCount);
  console.log('Sleeping Count:', sleepingCount);
}


function App() {
 useEffect(()=>{ 
 
  Papa.parse(Report, {
    header: true,
    complete: function (result) {
      
      const csvData = result.data;
  
     
      countOccurrences(csvData);
      console.log(result.data);
    },
   
  });

 },[]) 
 
  

  return (
    <div>
    hello
    </div>
  );
}

export default App;
