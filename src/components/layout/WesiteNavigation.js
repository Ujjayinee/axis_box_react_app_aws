import { Link } from "react-router-dom";
import classes from "./WebsiteNavigation.module.css";
import { useContext } from "react";
import FavouritesContext from "../../store/Favourites-context";

function WebsiteNavigation() {
  const favouritesCtx = useContext(FavouritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}> Movie App</div>

      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/movie"> AddMovie</Link>
          </li>
          <li>
            <Link to="/favourites"> Favourites
             <span className={classes.badge}> {favouritesCtx.totalFavourites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default WebsiteNavigation;
