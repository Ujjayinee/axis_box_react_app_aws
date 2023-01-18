import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Addmovie from "./pages/AddMovie";
import Favourites from "./pages/Favourites";
import WebsiteNavigation from "./components/layout/WesiteNavigation";

function App() {
  //localhost:3000/ ->Home
  // /addmovie ->AddMovie
  // /favourites ->favourites

  return (
    <div>
      <WebsiteNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Addmovie />} />

        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
