import { useState } from "react";

export default function PremierLeagueScores({data, onCreate, onUpdate, error}){
    const [formData, setFormData] = useState({id:'', name:'', B3up:'', Uno:'', FootballDice:'', Darts:''});
    const [editingId, setEditingId] = useState(null);

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(editingId){
          onUpdate(formData);
          setEditingId(null);
        }else{
          onCreate(formData);
        }
        setFormData({id:'', name:'', B3up:'', Uno:'', FootballDice:'', Darts:'' });
      };

    const handleEdit = (item) => {
      setEditingId(item.id);
      setFormData({
        id: item.id,
        name: item.name,
        B3up: item.B3up,
        Uno: item.Uno,
        FootballDice: item.FootballDice,
        Darts: item.Darts
      })
    }

    return (
      <div>
        <h2>New</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="name" onChange={handleFormChange} value={formData.name}/><br/>
          <input type="text" name="B3up" placeholder="B3UP" onChange={handleFormChange} value={formData.B3up}/><br/>
          <input type="text" name="Uno" placeholder="UNO" onChange={handleFormChange} value={formData.Uno}/><br/>
          <input type="text" name="FootballDice" placeholder="Footbal Dice" onChange={handleFormChange} value={formData.FootballDice}/><br/>
          <input type="text" name="Darts" placeholder="Darts" onChange={handleFormChange} value={formData.Darts}/><br/>
          <button type="submit">
            {editingId ? 'Update' : 'Create'}
          </button>
        </form>

        <ul>
          {data.map((player, index) => (
            <li key={index}>
              {player.name}:{player.B3up} //
              {player.Uno} //
              {player.FootballDice} //
              {player.Darts} //
              <div><button onClick={() => handleEdit(player)}>Edit</button></div>
            </li>
          ))}
        </ul>
        {error && <div>{error.message}</div>}
      </div>
    );
}