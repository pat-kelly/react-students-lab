export default function Score(props){
// console.log(props.scores);
  return(
    <>
      <table className="vw-twenty">
        <thead>
          <tr>
            <th>Date</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {props.scores.map((score, idx) =>(
            <tr key={idx}>
              <td>{score.date}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}