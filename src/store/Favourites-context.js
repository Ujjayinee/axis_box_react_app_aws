import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMovie) => {},
  removeFavourite: (movieId) => {},
  movieIsFavourite: (movieId) => {}
});

function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavouriteHandler(favouriteMovie) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteMovie);
    });
  }

  function removeFavouriteHandler(movieId) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter((movie) => movie.id !== movieId);
    });
  }

  function movieIsFavouriteHandler(movieId) {
    return userFavourites.some((movie) => movie.id === movieId);
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    movieIsFavourite: movieIsFavouriteHandler,
  };
  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
export {FavouritesContextProvider};
