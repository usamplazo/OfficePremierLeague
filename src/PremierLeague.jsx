import { useEffect, useState } from "react";
import PremierLeagueScores from "./PremierLeagueScores";

const API_URL = '/scores';
const headers = {
  'Content-Type': 'application/json',
};

function PremierLeague() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

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

    const handleCreate = (item) => {
      console.log('Adding player: ${JSON.stringify(item)}')
      console.log("  " + item.name + " " + item.B3up + " " + item.Uno + " " + item.FootballDice + " " + item.Darts)

      fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({id: item.id, name: item.name, B3up: item.B3up, Uno: item.Uno, FootballDice: item.FootballDice, Darts: item.Darts}),
      })
      .then(response => response.json())
      .then(returnedItem => setData([...data, returnedItem]))
      .catch(error => setError(error + "  " + item.name + " " + item.B3up + " " + item.Uno + " " + item.FootballDice + " " + item.Darts));
    };
    
    const handleUpdate = (updatedItem) => {
      console.log(`Updating player data (ID:${updateUrl.id})!`)
      
      const updateUrl = `${API_URL}/${updatedItem.id}`;
      
      fetch(updateUrl,{
        method: 'PUT',
        headers,
        body: JSON.stringify(updatedItem),
      })
        .then(() => setData(data.map(item=>item.id == updatedItem.id ? updatedItem : item)))
        .catch(error=>setError(error));
    };

    const handleDelete = (playerToRemoveId) => {
        console.log(`Deleting player data (ID:${playerToRemoveId})!`)

        const playerToRemoveUrl = `${API_URL}/${playerToRemoveId}`;

        fetch(playerToRemoveUrl,{
          method:'DELETE',
          headers
        })
        .then(() => setData(data.filter(player => player.id !== playerToRemoveId)))
        .catch(error=> console.error('Error deleting player: ', error));
    };

  return (
      <PremierLeagueScores
          data={data}
          error={error}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          />
  );
  }

export default PremierLeague;