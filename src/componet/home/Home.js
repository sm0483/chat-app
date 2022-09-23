import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import cat from '../../images/cat.jpg'

const Home = () => {
    const [search,setSearch]=useState("");

    return (
        <div className="home-page">
            <div className="hero">
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
                <section className='chat-container'>
                    <div className="contact-bar">

                        <div className="contact-container">
                            <div className="image-container">
                                <img src={cat} alt="cat" />
                            </div>
                            <div className="text-container">
                                <h2>Ravi</h2>
                                <h3>Last chat</h3>
                            </div>
                        </div>
                
                        <div className="contact-container">
                            <div className="image-container">
                                <img src={cat} alt="cat" />
                            </div>
                            <div className="text-container">
                                <h2>Ravi</h2>
                                <h3>bye</h3>
                            </div>
                        </div>

                        <div className="contact-container">
                            <div className="image-container">
                                <img src={cat} alt="cat" />
                            </div>
                            <div className="text-container">
                                <h2>Ravi</h2>
                                <h3>Last chat</h3>
                            </div>
                        </div>

                        <div className="contact-container">
                            <div className="image-container">
                                <img src={cat} alt="cat" />
                            </div>
                            <div className="text-container">
                                <h2>Ravi</h2>
                                <h3>Last chat</h3>
                            </div>
                        </div>

                        <div className="contact-container">
                            <div className="image-container">
                                <img src={cat} alt="cat" />
                            </div>
                            <div className="text-container">
                                <h2>Ravi</h2>
                                <h3>Last chat</h3>
                            </div>
                        </div>

                        <div className="contact-container">
                            <div className="image-container">
                                <img src={cat} alt="cat" />
                            </div>
                            <div className="text-container">
                                <h2>Ravi</h2>
                                <h3>Last chat</h3>
                            </div>
                        </div>

                        <div className="contact-container">
                            <div className="image-container">
                                <img src={cat} alt="cat" />
                            </div>
                            <div className="text-container">
                                <h2>Ravi</h2>
                                <h3>Last chat</h3>
                            </div>
                        </div>

                        <div className="contact-container">
                            <div className="image-container">
                                <img src={cat} alt="cat" />
                            </div>
                            <div className="text-container">
                                <h2>Ravi</h2>
                                <h3>Last chat</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="chat-page">
                <div className="chat-head">
                    <h2>Name</h2>
                </div>
                <div className="chat-area">
                    <span>hello world</span>
                </div>
                <div className="send-area">
                    <form>
                        <input type="text" />
                        <Button>Send</Button>
                    </form>
                </div>
            </section>
        </div>
      );
}
 
export default Home;