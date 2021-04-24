import {Link} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';

const Header =()=>{

    return(
        <div>
            <Menu>
               {/* <Menu.Item name="homepage"><Link to="/">Homepage</Link></Menu.Item>  */}
               <Menu.Item name="getusers"><Link to="/getUsers" >All Users</Link></Menu.Item>
               <Menu.Item name="adduser"><Link to="/addUser" >Add User</Link></Menu.Item>
            </Menu>
        </div>
        )   
}

export default Header;