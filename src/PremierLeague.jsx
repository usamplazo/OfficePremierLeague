import { useEffect, useState } from "react";
import PremierLeagueScores from "./PremierLeagueScores";

function PremierLeague() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    //Simulating data from API
    const fetchData = () => {
      const scores = [
          {id: 1 ,name: "CJ", B3up : 100, Uno: 92, FootbalDice: 78, Darts: 81 },
          {id: 2 ,name: "GP", B3up : 90, Uno: 95, FootbalDice: 141, Darts: 100 },
          {id: 3 ,name: "ST", B3up : 95, Uno: 92, FootbalDice: 100, Darts: 101 },
          {id: 4 ,name: "VI", B3up : 85, Uno: 90, FootbalDice: 60, Darts: 80 }
      ];
    setData(scores);
    }
    
  return (
      <PremierLeagueScores
          data={data}/>
  );
  }

export default PremierLeague;