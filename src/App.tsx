import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {Container,Image,Title,Description,Button, MovieContainer, Genres, Forms, Input, Label, PreferenceContainer, MoviePreferences, TitlePreferences} from './styles'


interface dataMovie{
    original_title: string;
    poster_path: string;
    overview:string;    
    genres:[
      Object
      :{
      name:string
    }]
    popularity: number;
    runtime: number;

}
function App() {
const [movie,setMovie] = useState<dataMovie>()
const [idMovie,setIdMovie] = useState(false)
const [loading,setLoading] = useState(true)


  useEffect(() => {
    async function getMovie(){
      setLoading(true)

      try {
        const id = (Math.random() * (10000 - 0) + 0);
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${parseInt(id.toFixed())}?api_key=c21423006a220205b03494791e5e849e`);
  
  
      } catch (error:any) {
        if(error.response.status===404){
          console.log('errp')
          getMovie()
        }
      }
      setLoading(false)
    
    }
     //sortedMovie()
    getMovie();
  
  }, []);
  async function getMovie(){
    setLoading(true)
  function  delay() {
      var tNow = Date.now();
      var dateDiff = 0;
      do {
         dateDiff = Date.now() - tNow;
         } while (dateDiff < 2000); //milliseconds
  }
  

    try {
      const id = (Math.random() * (10000 - 0) + 0);
      const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${parseInt(id.toFixed())}?api_key=c21423006a220205b03494791e5e849e`); 
      const popularity =  data.popularity.toFixed()   
      if( popularity !== 30 ){
        console.log(data.popularity)
        return setMovie(data)
      }      
      
    } catch (error:any) {
      console.log(error.response.status)

      if(error.response.status===404){
        console.log('errp')
        getMovie()
        

      }

    }
    delay()
    setLoading(false)
  

  }
  
  if(loading){
    return <h1>carregando.....</h1>
  }

  
  return (
    <Container>
      <PreferenceContainer>
        <TitlePreferences>
          Escolha a sua preferência de filme
        </TitlePreferences>
        <Forms>
          <Label>Gênero:</Label>
          <Input><option value=''>{movie?.genres}</option></Input>
          <Label>Ranking:</Label>
          <Input><option value="">5</option></Input>
          <Label>Duração em minutos:</Label>
          <Input><option value="">{movie?.runtime}</option></Input>
        </Forms>
      </PreferenceContainer>
      <MoviePreferences>
        <MovieContainer>        
          <Image src={'https://image.tmdb.org/t/p/original/'+movie?.poster_path}/>
        
            <Title>
              {movie?.original_title}
            </Title>                        

        </MovieContainer>
        <Title> Seu ranking é : {movie?.popularity.toFixed()}</Title>
        <Description>
          {movie?.overview}
        </Description>

        <Button onClick={()=>getMovie()}>Sortear</Button>
      </MoviePreferences>
      
    </Container>
  );
}

export default App;
