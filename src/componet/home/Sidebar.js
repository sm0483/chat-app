import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import cat from "../../images/cat.jpg"
import { signOut } from "firebase/auth";
import {auth} from '../../firebase'
import { AuthContext } from "../../context/AuthContext";

const SideBar = () => {
    const [search,setSearch]=useState("");
    const {currentUser}=useContext(AuthContext);
    const {displayName,photoURL}=currentUser;

    return ( 
        <section className="main-head">
            <div className="navigation">
                <div className="heading-container">
                    <span className='head'>Chat App</span>
                    <div className="user">
                        <img src={photoURL} alt="image" />
                        <span>{displayName}</span>
                        <Button onClick={()=>signOut(auth)}>Logout</Button>
                    </div>
                </div>

                <div className="search-bar">
                        <input type="text" id='search' onChange={(e)=>setSearch(e.target.value)}  value={search} placeholder="Search"/>
                </div>
            </div>
        </section>
     );
}
 
export default SideBar;