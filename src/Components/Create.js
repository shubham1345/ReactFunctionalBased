import React, {  useState } from 'react'
import {Link ,Navigate} from 'react-router-dom'
import axios from 'axios'
//import Redirect from 'react-router-dom'

export default function Create() {

    const [ name,setName] = useState("");
    const [ age,setAge] = useState(0);
    const [ rollNo,setRollNo] = useState(0);
    const [ description,setDescription] = useState("");
    const [path, setPath] = useState("");

    const handleSave = () =>{
    
    
        axios.post(`https://localhost:44392/api/student/Create`,{
            "studentId": 0,
            "name": name,
            "age":  parseInt(age),
            "rollNo": parseInt(rollNo),
            "description": description
        })  
              .then((response) => {
                console.log(response);
                setPath("/");
              }, (error) => {
                console.log(error+"    not saved");
                setPath("/Create");
              });
      }

    const handelName = (e) => {
        setName(e.target.value);    
      }
      const handelAge = (e) => {
        setAge(e.target.value);
      }
      const handelRollNo = (e) => {
        setRollNo(e.target.value);
      }
      const handelDescription = (e) => {
        setDescription(e.target.value);
      }



    if (path !== "") {

        return <Navigate to={path} />;
  
    }
    else{
  return (
    <div className="container">
        <h1>Create Page</h1>
        {/* <Input name={this.state.name} age={this.state.age} rollNo={this.state.rollNo} description={this.state.description} /> */}
        <div className="row">
          <div className="col-mb-3">
            <label className="form-label">Student Name</label>
            <input type="text" className="form-control" onChange={e => handelName(e)}  value={name} id="studentName" placeholder="Full Name" />
          </div>
          <div className="col-mb-3">
            <label className="form-label">Age</label>
            <input type="number" value={age} onChange={e => handelAge(e)} className="form-control" id="age" />
          </div>
        </div>
        <div className="row">
          <div className="col-mb-3">
            <label className="form-label">Roll.No</label>
            <input type="number" value={rollNo} onChange={e => handelRollNo(e)} className="form-control" id="rollNo" />
          </div>
          <div className="col-mb-3">
            <label className="form-label">Description</label>
            <input type="text" value={description} onChange={e => handelDescription(e)} className="form-control" id="description" placeholder="enter sometext" />
          </div>
        </div>
        <button className="btn-primary mt-2" onClick={handleSave}>Save</button>
        <button className="btn-Danger"><Link to="/GetAll">Cancel</Link></button>
      </div>
  )
    }
}


    // this.state =({
    //   studentId: 0,
    //   name: "",
    //   age: 0,
    //   rollNo: 0,
    //   description: "",
    //   path:""

    // }
 
