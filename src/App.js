import styled from "styled-components"
import MovieComponent from "./components/MovieComponent";
import MovieInfoComponent from "./components/MovieInfoComponent";
import Axios from "axios"
import { useState,useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const AppName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 1rem 1.2rem;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

const HeaderLeftButtons = styled.div`

`
const WatchlistBtn = styled.button`
  padding:5px 7px;
  border-radius:5px;
  border:none;
  cursor:pointer;
  margin-right:20px
`
const RegisterBtn = styled.button`
  padding:5px 7px;
  border-radius:5px;
  border:none;
  cursor:pointer;
`

// Movie Container
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;
`;

function App() {

  const [movieList,updateMovieList]=useState([])
  const [selectedMovie, onMovieSelect] = useState({});

  useEffect(()=>{
    const fetchMovieData=async()=>{
      try{
        const response = await Axios.get(
          `https://propftx-movie-api.onrender.com/movies/`
        );
        console.log(response.data.movies);
        updateMovieList(response.data.movies);
      }
      catch(error){
        console.error(`Error Fetching Movie Data:`,error)
      }
    }
    fetchMovieData()
  },[])

  return (
    <Container>
      <Header>
        <AppName>React Movie-App</AppName>
        <HeaderLeftButtons>
          <WatchlistBtn onClick={()=>{alert("Please Login to add movie to Watchlist!")}} >WatchList</WatchlistBtn>
          <RegisterBtn>Sign Up</RegisterBtn>
        </HeaderLeftButtons>
      </Header>

      {selectedMovie.title && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}

      <MovieListContainer>  
        {movieList?.length
          ? (movieList.map((movie,id)=>(<MovieComponent key={id} movie={movie} onMovieSelect={onMovieSelect} />)))
          : "Getting Movies From Server, Plz wait..."
        }

      </MovieListContainer>
    </Container>
  );
}

export default App;
