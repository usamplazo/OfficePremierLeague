export default function PremierLeagueScores({data}){
    return(
        <div>
            <ul>
                {
                data.map((player, index)=>(
                    <li key={index}>
                        {player.name}: 
                            {player.scores.B3up} // 
                            {player.scores.Uno} // 
                            {player.scores.FootbalDice} // 
                            {player.scores.Darts} //
                    </li>
                ))}
            </ul>
        </div>
    );
}