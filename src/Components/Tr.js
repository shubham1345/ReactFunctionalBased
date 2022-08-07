import React,{ useState} from 'react'
import {Navigate} from 'react-router-dom'
import axios from 'axios'

export default function Tr(props) {
    //const [student, setStudent] = useState([]);
    const [path, setPath] = useState("");
    const handelEdit=(Id)=>{
        setPath("/Edit/"+ Id);
      }
    z

    const handelDelete = (Id) =>{
      var a = window.confirm("Are you sure? you want to delete?")
      if(a === true){
      axios.get(`https://localhost:44392/api/student/Delete/${Id}`)
      
      setPath("/GetAll");
    }
      }

    let {Id, StudentName,Age,RollNo,Description} = props;
    if(path !== ""){
      
      return <Navigate to={path} /> 
    }
    else{
    return (
      <tr className="table-active">
        <td>{Id}</td>
        <td>{StudentName}</td>
        <td>{Age}</td>
        <td>{RollNo}</td>
        <td>{Description}</td>
        <td>
        
          <button type="button" onClick={ () => handelEdit(Id) }>Edit</button>
          <button type="button" onClick={ () => handelDelete(Id) }>Delete</button>
        </td>
      </tr>
    );
    }
}
