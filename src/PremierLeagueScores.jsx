export default function PremierLeagueScores({data}){
    return(
        <div>
            <ul>
                {data.map(data=>(
                    <li key={data.id}>{data.name}: {data.B3UP} // {data.Uno} // {data.FootbalDice} // {data.Darts}</li>
                ))}
            </ul>
        </div>
    );
}