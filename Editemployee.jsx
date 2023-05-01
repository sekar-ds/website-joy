import React, {  useState } from 'react'
 import { useNavigate} from 'react-router-dom';
// import {db} from '../firebase';
// import {  updateDoc,doc} from "firebase/firestore";
// import {tablecollectionref} from '../firebasecollection'


function EditEmployee({addemployee}) {
	// const [data, setData] = useState({
	// 	name: '',
	// 	email: '',
	// 	address: '',
	// 	salary: '',
	// })
	 const navigate = useNavigate()
	 const [user,setuser]  = useState('');
	const [email,setEmail] = useState('');
	const [salary,setsalary] = useState('');
	const [address,setAddress] = useState('');



   




  return (
  
    <div className='d-flex flex-column align-items-center pt-4'>
			<h2>Update Employee</h2>
			<form class="row g-3 w-50" >
			<div class="col-12">
					<label for="inputName" class="form-label">Name</label>
					<input type="text" class="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
					onChange={(e)=> setuser(e.target.value)} />
				</div>,
				<div class="col-12">
					<label for="inputEmail4" class="form-label">Email</label>
					<input type="email" class="form-control" id="inputEmail4" placeholder='Enter Email' autoComplete='off'
					onChange={(e)=> setEmail(e.target.value)} />
				</div>
				<div class="col-12">
					<label for="inputSalary" class="form-label">Salary</label>
					<input type="text" class="form-control" id="inputSalary" placeholder="Enter Salary" autoComplete='off'
					onChange={(e)=> setsalary(e.target.value)} />
				</div>
				<div class="col-12">
					<label for="inputAddress" class="form-label">Address</label>
					<input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" autoComplete='off'
					onChange={(e)=> setAddress(e.target.value)}/>
				</div>
				<div class="col-12">
					<button type="submit" class="btn btn-primary"
					 >Update</button>
				</div>
			</form>
		</div>
		
  )
}

export default EditEmployee