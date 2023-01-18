import classes from "./MovieItem.module.css";
import { useContext } from "react";
import FavouritesContext from "../../store/Favourites-context";

function MovieItem(props) {
  const favoriteCtx = useContext(FavouritesContext);
  const movieIsFavourite = favoriteCtx.movieIsFavourite(props.id);
  function toggleFavouriteStatusHandler() {
    if (movieIsFavourite) {
      favoriteCtx.removeFavourite(props.id);
    } else {
      favoriteCtx.addFavourite({
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
        imdb: props.imdb
      });
    }
  }
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3> Title: {props.title}</h3>
        <p> Desc: {props.description}</p>
        <p> IMDB: {props.imdb}</p>
      </div>

      <div className={classes.actions}>
        <button onClick={toggleFavouriteStatusHandler}>
          {movieIsFavourite ? "Remove from Favourites" : "Add to Favourites"}
        </button>
      </div>
    </li>
  );
}
export default MovieItem;
