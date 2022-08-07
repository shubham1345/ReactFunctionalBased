import React from 'react'
import Tr from './Tr'

export default function Table(z) {
    let {student} = props;
  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Age</th>
            <th>Roll NO.</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {student.map((element, i) => {
            return (
              
              <Tr      key={i}
                Id={element.studentId}
                StudentName={element.name}
                Age={element.age}
                RollNo={element.rollNo}
                Description={element.description}
              />
              
            );
          })}
        </tbody>
      </table>
    </div>
  )
}
