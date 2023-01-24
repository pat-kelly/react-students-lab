import { useState } from "react";
import StudentDetail from "./StudentDetail";

export default function Student(props){

  const id=props.student.key,
    name=props.student.name,
    bio = props.student.bio,
    scores = props.student.scores;

  const [showBio, setShowBio] = useState(false);
  const [showGrades, setShowGrades] = useState(false);

  function handleShowBio(){
    if(showBio){
      setShowBio(!showBio);
      StudentDetail(props);
    }else{
      setShowBio(!showBio);
      StudentDetail(props);
    }
  }

  function handleShowGrades(){
    
  }

  return(
    <div className="student-container">
      <button onClick={handleShowBio}><h3>{name}</h3></button>
      <p id={name} className="hidden">
        <span className="em">Bio: </span>
        {bio}
        <br/>
        <button onClick={handleShowGrades} className="grades">Show Grades</button>
      </p>
    </div>
  )
}