import { useContext } from "react";
import FavouritesContext from "../store/Favourites-context";
import MovieList from "../components/movies/MovieList";

function Favourites() {
  const favouritesCtx = useContext(FavouritesContext);
  let content;

  if (favouritesCtx.totalFavourites === 0) {
    content = <p> No favourite movie added.</p>;
  } else {
    content = <MovieList movies={favouritesCtx.favourites} />;
  }
  return (
    <div className="content">
      <h2> Favourites movies page</h2>
      {content}
    </div>
  );
}

export default Favourites;
