import { useEffect, useState } from "react";
import PremierLeagueScores from "./PremierLeagueScores";

const API_URL = '/scores';

function PremierLeague() {
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    //Simulating data from API
    const fetchData = () => {
     fetch(API_URL)
      .then(response=>response.json())
      .then(data=>setData(data))
      .catch(error=>setError(error));
    };
 

  return (
      <PremierLeagueScores
          data={data}/>
  );
  }

export default PremierLeague;