import React, { useState } from 'react';
import {addDoc} from 'firebase/firestore';
import { tablecollectionref } from '.././firebasecollection';
//  import { ref,uploadBytes,getDownloadURL } from "firebase/storage";
// import { storage } from '../firebase';
import {useNavigate}from 'react-router-dom';




export default function AddEmployee ()  {



 
//   const [image,setImage] =useState('')  
  
const navigation = useNavigate();




const [user,setUser] =useState('')
const [email,setEmail] =useState('')
const [salary,setSalary] =useState('')
const [address,setAddress] =useState('')
const [password,setPassword] =useState('')


function handleSubmit(e){
    e.preventDefault()
    if(user === '' || email === '' || salary === '' || address === '' || password ==='' ){
        return
    }
  
    addDoc(tablecollectionref,{user,email,salary,address,password}).then(response =>{
        console.log(response)
    }).catch(error=>{
        console.log(error.message)
    });
    // alert(user)
    navigation('/employeelist') 

};
// const uploade =()=>{
// const imageRef= ref(storage, "image");
// uploadBytes(imageRef,image).then(()=>{
//     getDownloadURL(imageRef).then((url)=>{
//         ;
//     }).catch((error)=>{
//         console.log(error.message,"error getting")
//     });
//     setImage(null)
//     })
//     .catch((error)=>{
//         console.log(error.message)
//     })
// };

	return (
		<div className='d-flex flex-column align-items-center pt-4'>
			<h2>Add Employee</h2>
			<form class="row g-3 w-50" onSubmit={handleSubmit}>
			<div class="col-12">
					<label for="inputName" class="form-label">Name</label>

					<input type="text" value={user}  class="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
					 onChange={e=> setUser(e.target.value)}/>
				</div>
				<div class="col-12">
					<label for="inputEmail4" value={email} class="form-label">Email</label>
					<input type="email" class="form-control" id="inputEmail4" placeholder='Enter Email' autoComplete='off'
		 onChange={e=> setEmail(e.target.value)}/>
				</div>
				
				<div class="col-12">
					<label for="inputSalary" class="form-label">Salary</label>
					<input type="text" value={salary}class="form-control" id="inputSalary" placeholder="Enter Salary" autoComplete='off'
			 onChange={e=> setSalary(e.target.value)}/>
				</div>
				<div class="col-12">
					<label for="inputAddress" class="form-label">Address</label>
					<input type="text" value={address} class="form-control" id="inputAddress" placeholder="1234 Main St" autoComplete='off'
				 onChange={e=> setAddress(e.target.value)}/>
				</div>
                <div class="col-12">
					<label for="inputPassword4" class="form-label">Password</label>
					<input type="password" value={password} class="form-control" id="inputPassword4" placeholder='Enter Password'
					  onChange={e=> setPassword(e.target.value)}/>
				</div>
				{/* <div class="col-12 mb-3">
                <label for="inputPassword4" class="form-label">Upload Image</label>
					<input type="file"  class="form-control" id="" placeholder='Uploade Image'
					  onChange={(e)=> {setImage(e.target.files[0])}} />
              

				</div> */}
				<div class="col-12">
					<button type="submit" class="btn btn-primary" >Create</button>
				</div>
			</form>
		</div>

	)
    };