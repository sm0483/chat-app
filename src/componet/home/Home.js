import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import SideBar from './Sidebar';
import Contact from './Contact';
import Chat from './Chat'


const Home = () => {
    return (
        <div className="home-page">
            <div className="hero">
                <SideBar/>
                <Contact/>
            </div>
            <Chat></Chat>
        </div>
      );
}
 
export default Home;