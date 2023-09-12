import { GiMountaintop } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import "./Home.css";
import bgone from '../assets/images/bg-one.jpg'

const Home = () => {
  return (
    <div className="home-container" style={{backgroundImage:` url(${bgone})` , backgroundPosition: '-400px -700px'}}>
      <div className="nav-bar">
        <GiMountaintop className="logo" />
        <div className="links">
          <NavLink to={"/history"}>01. HISTORY</NavLink>
          <NavLink to={"/climb"}>02. TEAM</NavLink>
        </div>
      </div>
      <div className="title">
        <h1 className="la">LOSANGELS</h1>
        <h1 className="mtn">MOUNTAINS</h1>
      </div>
    </div>
  );
};

export default Home;
