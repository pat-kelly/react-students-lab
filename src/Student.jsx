import { useState } from "react";
import StudentDetail from "./StudentDetail";
import Score from "./Score";

export default function Student(props){

  const name=props.student.name,
    bio = props.student.bio,
    scores = props.student.scores;

  const [showBio, setShowBio] = useState(false);
  const [showGrades, setShowGrades] = useState(false);

  function handleShowBio(){
      setShowBio(!showBio);
      StudentDetail(props);
  }

  function handleShowGrades(){
    setShowGrades(!showGrades);
  }

  return(
    <>
      <div className="student-container">
      <button onClick={handleShowBio}><h3>{name}</h3></button>
        <div id={name} className="hidden bio">
          <span className="em">Bio: </span>
          {bio}
          <br/>
          <button /* disabled = {showGrades} */ onClick={handleShowGrades} className="grades">Show Grades</button>
          {showGrades && <Score scores={scores} />}
        </div>
      </div>
    </>
  )
}