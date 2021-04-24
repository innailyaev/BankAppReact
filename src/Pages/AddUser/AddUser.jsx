import React, { useState } from 'react';
import axios from 'axios';
import './AddUser.css';

const AddUser =()=>{

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [id,setId] = useState();
    const [cash,setCash] = useState(0);
    const [credit,setCredit] = useState(0);
    const [error,setError] = useState();

    const postNewUser= async () => {
        console.log("post");
        try{
           const response = await axios.post('https://bankappinna.herokuapp.com/api/users', {
                Name:name,
                email:email,
                passportId: parseInt(id),
                accountDetails:{
                cash: parseInt(cash),
                credit: parseInt(credit)
                }
            });
            if(response.data.error){
                setError(response.data.error);
            }
            else{
                setError('');
            }
           
        }catch(err){
                console.log(err); 
        }
    }

    const formHandler = (e)=>{
        e.preventDefault()
    }

    const clickHandler = ()=>{
        postNewUser();
    }

  return (
    <div className="addUserContainer">
        <h1>Add New User</h1>
        <div className="formDiv">
            <form onSubmit={formHandler} className="formContainer">
                <label>Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
                <label>Passport Id</label>
                <input type="text" onChange={(e)=>setId(e.target.value)}/>
                <label>Email</label>
                <input type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
                <label>Cash</label>
                <input type="text" onChange={(e)=>setCash(e.target.value)}/>
                <label>Credit</label>
                <input type="text" onChange={(e)=>setCredit(e.target.value)}/>
                <button onClick={clickHandler} className="btn">Submit</button>
            </form>
        </div>
        { error === '' ? <p>User added to the bank</p> : <p>{error}</p>}

    </div>
  );
}

export default AddUser;