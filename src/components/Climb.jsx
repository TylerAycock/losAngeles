import "./Climb.css";
import { NavLink } from "react-router-dom";
import birds from "../assets/images/birds.jpg";
import { GiMountaintop } from "react-icons/gi";

const Climb = () => {
  return (
    <div className="climb-container">
      <div className="climb-header">
        <div className="two">
          <h1>02.</h1>
          <h2>Climb</h2>
        </div>
        <div className="header-blurb">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            consequuntur unde explicabo cupiditate saepe atque voluptatibus,
            exercitationem deleniti dolorum, repellat iusto necessitatibus omnis
            natus.
          </p>
        </div>
      </div>
      <div className="climb-nav">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to={"/climb"}
        >
          MOUNTAIN 1
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          MOUNTAIN 2
        </NavLink>
      </div>
      <div
        className="climb-content"
        style={{ backgroundImage: ` url(${birds})` }}
      >
        <div className="schedule">
          <h2>Schedule</h2>
          <table className="table">
            <tr>
              <td>25 Nov 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>28 Nov 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>18 Dec 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>7 Jan 2017</td>
              <td>Vestibulum viverra</td>
            </tr>
          </table>
        </div>
        <footer className="footer">
          <NavLink to={"/"}>
            <div className="footer-logo-container">
              <GiMountaintop className="climb-logo" />
              <div>
                <h3 className="la-climb">LOSANGELES</h3>
                <h3 className="mtn-climb">MOUNTAINS</h3>
              </div>
            </div>
          </NavLink>
          <p className="copyright">COPYRIGHT 2016. ALL RIGHTS RESERVED</p>
        </footer>
      </div>
    </div>
  );
};

export default Climb;
