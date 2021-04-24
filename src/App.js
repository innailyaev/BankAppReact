import './App.css';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Pages/Header';
import AllUsers from './Pages/Allusers/AllUsers';
import AddUser from './Pages/AddUser/AddUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div> 
          <Header/>
          {/* <Route path="/" exact component={Homepage}/> */}
          <Route path="/" exact component={AllUsers}/>
          <Route path="/addUser" exact component={AddUser}/>
          {/* <Footer/> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
