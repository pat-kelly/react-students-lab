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