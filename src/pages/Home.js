import MovieList from "../components/movies/MovieList";

const MOVIE_DATA = [
  {
        
    title:"Inception",
    image:"https://flxt.tmsimg.com/assets/p7825626_p_v8_af.jpg",
    imdb:"8.8",
    description:"Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son."
},
{
    id:"movie2",
    title:"Rocketry: The Nambi Effect",
    image:"https://m.media-amazon.com/images/M/MV5BNzBkMTYwYjktMzFlZS00MmNhLTgxNjYtNGEwYjUxYTBlNjM5XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    imdb:"9.0",
    description:"Based on the life of Indian Space Research Organization scientist Nambi Narayanan, who was framed for being a spy and arrested in 1994. Though free, he continues to fight for justice against the officials who falsely implicated him."
},
{
    id:"movie3",
    title:"The Kashmir Files",
    image:"https://filmdaily.co/wp-content/uploads/2022/03/kashmir-files-2.jpg",
    imdb:"8.3",
    description:"Krishna endeavours to uncover the reason behind his parents' brutal killings in Kashmir. He is shocked to uncover a web of lies and conspiracies in connection with the massive genocide."
},
{
    id:"movie4",
    title:"The Intern",
    image:"https://images-na.ssl-images-amazon.com/images/I/91YXcUk-auL._RI_.jpg",
    imdb:"7.1",
    description:"Ben Whittaker, a 70-year-old widower, realises that he is not cut out for retirement. He then applies to become a senior intern for a sceptical boss at an online fashion site."
}
];

function Home() {
  return (
    <div>
      <h2> All Movies </h2>
      <MovieList movies={MOVIE_DATA} />
    </div>
  );
}

export default Home;
export{MOVIE_DATA};
