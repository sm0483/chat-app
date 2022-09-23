import { useState } from "react";
import { Button } from "react-bootstrap";
import cat from "../../images/cat.jpg"

const SideBar = () => {
    const [search,setSearch]=useState("");

    return ( 
        <section className="main-head">
            <div className="navigation">
                <div className="heading-container">
                    <span className='head'>Chat App</span>
                    <div className="user">
                        <img src={cat} alt="image" />
                        <span>John</span>
                        <Button>Logout</Button>
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