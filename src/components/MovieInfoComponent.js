import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 350px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;

  & span {
    opacity: 0.5;
  }
`;
const Close = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: black;
  background: lightgray;
  height: fit-content;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
`;

const AddtoWatchlistBtn = styled.button`
  padding:8px 10px;
  border-radius:5px;
  border:none;
  cursor:pointer;
  margin-right:20px;
  background-color: black;
  color: red;
`
const MovieInfoComponent = (props) => {
//   const [movieInfo, setMovieInfo] = useState();
  const {title,duration,description,poster_image,genre,release_date,release_year,rating,director} = props.selectedMovie;

  return (
    <Container>
      {props.selectedMovie ? (
        <>
          <CoverImage src={poster_image} alt={title} />
          <InfoColumn>
            <MovieName>
              Movie: <span>{title}</span>
            </MovieName>
            <MovieInfo>
              Description: <span>{description}</span>
            </MovieInfo>
            <MovieInfo>
              IMDB Rating: <span>{rating}</span>
            </MovieInfo>
            <MovieInfo>
              Year: <span>{release_year}</span>
            </MovieInfo>
            <MovieInfo>
              Released: <span>{release_date}</span>
            </MovieInfo>
            <MovieInfo>
              Runtime: <span>{duration}</span>
            </MovieInfo>
            <MovieInfo>
              Genre: <span>{genre}</span>
            </MovieInfo>
            <MovieInfo>
              Director: <span>{director}</span>
            </MovieInfo>
            <MovieInfo>
            <AddtoWatchlistBtn onClick={()=>{alert("Please Login to add movie to Watchlist!")}} >Add to WatchList</AddtoWatchlistBtn>
            </MovieInfo>
          </InfoColumn>
          <Close onClick={() => props.onMovieSelect({})}>X</Close>
        </>
      ) : (
        "Loading..."
      )}
    </Container>
  );
};
export default MovieInfoComponent;