import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './AllUsers.css';

const GetAllUsers =()=>{

const [usersData,setUsersData] = useState([]);
const [userId,setUserId] = useState();

const getApi= async () => {
    console.log("getApi");
    try{
        const response = await axios.get('https://bankappinna.herokuapp.com/api/users');
        console.log(response.data);
        setUsersData(response.data);
       
    }catch(err){
            console.log(err); 
    }
}

  useEffect(()=>{
    getApi();
  },[userId])

  const clickHandler = async (id)=>{
    const response = await axios.delete(`https://bankappinna.herokuapp.com/api/users/${id}`);
    setUserId(id);
    console.log(response);
  }

  return (
    <div className="usersContainer">
     
        <h2>BANK USERS</h2>
        <table id="customers">
            <thead style={{fontSize:'20px'}}>
                <tr>
                    <th>NAME</th>
                    <th>ID</th>
                    <th>CASH</th>
                    <th>CREDIT</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
          {
              usersData.map((u,index)=>(
                <tr key={index} style={{marginBottom:'15px'}}>
                  <td>{u.Name}</td>
                  <td>{u.passportId}</td>
                  <td>{u.accountDetails.cash}</td>
                  <td>{u.accountDetails.credit}</td>
                  <td><i className="fas fa-trash-alt fa-2x" onClick={() => clickHandler(u.passportId)}></i></td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default GetAllUsers;