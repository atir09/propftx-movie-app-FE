import React from 'react'
import styled from 'styled-components'

const MovieContainer=styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
  
`
const CoverImage=styled.img`
  height: 362px;
  object-fit: cover;
`

const MovieName=styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

`

const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;

const MovieComponent = (props) => {
  const {title,duration,description,poster_image,genre,release_date,release_year,rating,director}=props.movie
  return (
    <MovieContainer onClick={() => {
      props.onMovieSelect({title,duration,description,poster_image,genre,release_date,release_year,rating,director});
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}>
      <CoverImage src={poster_image}></CoverImage>  
      <MovieName>{title}</MovieName>
      <InfoColumn>
        <MovieInfo>Year :{release_year} </MovieInfo>
        <MovieInfo>Rating : {rating} </MovieInfo>
      </InfoColumn>
    </MovieContainer>
  )
}

export default MovieComponent