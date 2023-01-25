export default function StudentDetail(props){

  const id = props.student.name;

  const el = document.getElementById(id);
  let show = false;
  if(el.classList.contains('hidden')){
    show = true;}
  return(
    <>
      {show ? el.classList.remove('hidden') : el.classList.add('hidden')}
    </>
  )
}
