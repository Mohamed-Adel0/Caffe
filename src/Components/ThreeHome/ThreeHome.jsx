import Css from "./ThreeHome.module.css";
import { Link , Outlet } from "react-router-dom";
const ThreeHome = () => {
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.news}>
        <h1>What kind of Coffee we serve for you</h1>
        <h4>Select Your favorite Coffe In Menu</h4>
        <ul>
            <li><Link to="/">Espresso</Link></li>
            <li><Link to="Cappuccino">Cappuccino Coffee</Link></li>
            <li><Link to="American">American Coffee</Link></li>
            {/* <li><Link to=""></Link></li> */}
        </ul>
        </div>
        <div className={Css.container} >
            <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default ThreeHome;
