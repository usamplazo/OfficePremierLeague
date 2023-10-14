import { useState } from "react";

export default function PremierLeagueScores({data, onCreate, error}){
    const [formData, setFormData] = useState({id:'', name:'', B3up:'', Uno:'', FootballDice:'', Darts:''});


    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(formData);
        setFormData({id:'', name:'', B3up:'', Uno:'', FootballDice:'', Darts:'' });
      };

    return (
      <div>
        <h2>New</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="name" onChange={handleFormChange}/><br/>
          <input type="text" name="B3up" placeholder="B3UP" onChange={handleFormChange}/><br/>
          <input type="text" name="Uno" placeholder="UNO" onChange={handleFormChange}/><br/>
          <input type="text" name="FootballDice" placeholder="Footbal Dice" onChange={handleFormChange}/><br/>
          <input type="text" name="Darts" placeholder="Darts" onChange={handleFormChange}/><br/>
          <button type="submit">
            Create
          </button>
        </form>

        <ul>
          {data.map((player, index) => (
            <li key={index}>
              {player.name}:{player.B3up} //
              {player.Uno} //
              {player.FootballDice} //
              {player.Darts} //
            </li>
          ))}
        </ul>
        {error && <div>{error.message}</div>}
      </div>
    );
}