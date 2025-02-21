const Student = ( { student } ) => {
  return (
    <div>
     <div>
        <h5>Name : {student.name}</h5>
        <p>
          Age : {student.age} - Email : {student.email}
        </p>
      </div>
    </div>
  )
}
export default Student