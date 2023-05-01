import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {getDocs} from 'firebase/firestore';
import { tablecollectionref } from './../firebasecollection';
import { db } from './../firebase';
import { doc ,deleteDoc} from "firebase/firestore";



function Employee() {
  const [table,settable]= useState([])
  const [data,setData] =useState([])

  useEffect(()=>{
       getTable()
  },[])
  
  useEffect(()=>{
      console.log(table)
  },[table])
   function getTable(){
      getDocs(tablecollectionref).then(response =>{
          const table = response.docs.map(doc=>({
            data: doc.data(),
             id:doc.id, 
          }))
          settable(table)
      })
      .catch(error => console.log(error.message))
  }

  const deleteData =(id)=>{
    const docTodelete = doc(db ,'addemployee',id);
    deleteDoc(docTodelete)
    .then(()=>{
      alert("Data Deleted")
    })
    .catch((err)=>{
      alert(err.message)
    })
  }
  
  // const handleDelete = async (id) => {
  //   try {
  //     await deleteDoc(doc(db, "addemployee", id));
  //     setData(data.filter((item) => item.id !== id));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };


   return (
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>Employee List</h3>
      </div>
      <Link to="/create" className='btn btn-success'>Add Employee</Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              {/* <th>Image</th> */}
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {/* {table.map(student =>  <li key={student.id}> {student.Id} :{student.data.user} {student.data.email} {student.data.salary}</li>)} */}

            {table.map((addemployee) => {
              return <tr key={addemployee.id}>
                  <td>{addemployee.data.user}</td>
                  {/* <td>{
                    <img src={`http://localhost:8081/images/`+addemployee.data.image} alt="" className='employee_image'/>
                    }</td> */}
                  <td>{addemployee.data.email}</td>
                  <td>{addemployee.data.address}</td>
                  <td>{addemployee.data.salary}</td>
                  <td>
                    <Link to='/editemployee' className='btn btn-sm btn-primary'>edit</Link>
                    <button onClick={e => deleteData(addemployee.id)} className='btn btn-sm btn-danger'>delete</button>
                  </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Employee