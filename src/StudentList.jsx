import { useState } from "react"
import { studentList } from "./data"
import Student from "./Student"

export default function StudentList(){

  // const [students, setStudentData] = useState(studentList);

  return(
    <>
      {studentList.map((student, idx)=>(
        <Student key={idx} student={student}/>
      ))}
    </>
  )
}
//<p className="enter"><span className="em">Bio: </span>{bio}</p>