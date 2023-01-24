import { useState } from "react";

export default function Student(props){

  const name=props.student.name,
    bio = props.student.bio,
    scores = props.student.scores;

  const [showBio, setShowBio] = useState(false);

  function handleShowBio(){
    setShowBio(!showBio);
  }

  return(
    <div className="student-container">
      <button onClick={handleShowBio}><h3>{name}</h3></button>
      {showBio ?
        <p className="enter"><span className="em">Bio: </span>{bio}</p>
        : <p className="hidden"><span className="em">Bio: </span>{bio}</p>
      }
    </div>
  )
}