import { GiMountaintop } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import "./History.css";
import history from "../assets/images/road.jpg";
import Carousel from "./Carousel";

const History = () => {
  return (
    <div
      className="history-container"
      style={{ backgroundImage: ` url(${history})` }}
    >
      <div className="history-nav-bar">
        <NavLink to={"/"}>
          <div className="logo-container">
            <GiMountaintop className="history-logo" />
            <div>
              <h3 className="la-logo">LOSANGELES</h3>
              <h3 className="mtn-logo">MOUNTAINS</h3>
            </div>
          </div>
        </NavLink>
        <div className="history-links">
          <NavLink to={"/history"}>01. HISTORY</NavLink>
          <NavLink to={"/climb"}>02. TEAM</NavLink>
        </div>
      </div>
      <div className="content">
        <div className="one">
          <h1>01.</h1>
          <h2>History</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          aspernatur, aut reprehenderit cupiditate corporis, velit consequuntur
          cumque excepturi eos id voluptatem quidem optio commodi unde natus
          fugiat laudantium, sed ab. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Alias aspernatur, aut reprehenderit cupiditate
          corporis, velit consequuntur cumque excepturi eos id voluptatem quidem
          optio commodi unde natus fugiat laudantium, sed ab.{" "}
        </p>
      </div>
      <Carousel />
    </div>
  );
};

export default History;
