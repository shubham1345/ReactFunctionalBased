import React, {useState,useEffect} from 'react'
import Table from './Table';
import { Link } from "react-router-dom";
import axios from 'axios'


export default function GetAll() {
    const [student, setStudent] = useState([]);

    useEffect(()=>{
            axios.get('https://localhost:44392/api/student/getall')
              .then((response) => {
                console.log(response);
                setStudent(response.data);
              }, (error) => {
                console.log(error);
              });
        },[] );

  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="align-center">STUDENT's</h1>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <button><Link to="/Create">Create</Link></button>
            </div>
          </div>
          <div>
            <Table student={student} />
          </div>
        </div>
      </div>
  )
}

