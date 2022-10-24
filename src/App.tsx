import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {Container,Image,Title,Description,Button, MovieContainer,Loading, Forms,LoadingText, Input, Label, PreferenceContainer, MoviePreferences, TitlePreferences} from './styles'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'


interface dataMovie{
    original_title: string;
    poster_path: string;
    overview:string; 
    genres:[
      {
      id:number;
      name:string;
      },   
    ];
  
    popularity: number;
    runtime: number;
    vote_average: number;


}
function App() {
const [movie,setMovie] = useState<dataMovie>()
const [genres,setGenres] = useState([])
const [idMovie,setIdMovie] = useState(false)
const [loading,setLoading] = useState(true)
const average = [1,2,3,4,5,6,7,8,9,10]
const time = ['30','60','90','120','150','180','210']

//states dos selects
const [selectGenres,setSelectGenres] = useState()
const [selectAverage,setSelectAverage] = useState(0)
const [selectTime,setSelectTime] = useState(0)





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
    async function genresFc(){
      const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=c21423006a220205b03494791e5e849e`)
      setGenres(data.genres)

    }
    genresFc()
  
  
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

      console.log(selectTime)
      
      if(data.vote_average>selectAverage && data.runtime<selectTime ){
        console.log('entrou pai')
        setLoading(false)
         data.genres.map((item:any)=>{
          console.log(item.name)
        })
        return setMovie(data)
        

      }else{

        getMovie()
      }
     
      
    } catch (error:any) {
      console.log(error.response.status)

      if(error.response.status===404){
        console.log('errp')
        getMovie()
        

      }

    }
    delay()
  

  }
  
  if(loading){
    return <Loading>        
      <LoadingText>Estamos buscando um filme para você 🙂...</LoadingText>
    </Loading>
  }

  
  return (
    <Container>
      <PreferenceContainer>
        <TitlePreferences>
          Escolha a sua preferência de filme
        </TitlePreferences>
        <Forms>
          <Label>Gênero:</Label>
          <Input onChange={(e:any)=>setSelectGenres(e.target.value)}>

          {
            genres.map((item:any)=>(
              <option value={item.name}>{item.name}</option>

            ))
          }
          </Input>
          <Label>Ranking:</Label>
          <Input onChange={(e:any)=>setSelectAverage(e.target.value)}>
            {
              average.map((item:any)=>(
                <option value={item}>{item}</option>
              ))
            }
          </Input>
          <Label>Duração em minutos:</Label>
          <Input onChange={(e:any)=>setSelectTime(e.target.value)}>
               {
                time.map((item:any)=>(
                  <option value={item}>{item} minutos</option>
                ))
              }
          </Input>
        </Forms>

      </PreferenceContainer>

      <MoviePreferences>
        <MovieContainer>        
          <Image src={'https://image.tmdb.org/t/p/original/'+movie?.poster_path}/>
        
            <Title>
              {movie?.original_title}
            </Title>                        

        </MovieContainer>
        <Title> Seu ranking é : {movie?.vote_average.toFixed(1)}</Title>
        <Title> Duração : {movie?.runtime}</Title>
        <div style={{display:'flex',flexDirection:'row',}}>

        {
          movie?.genres.map((item:any)=>(
            <p style={{color:'white',marginLeft:20}}>{item.name}</p>

          ))
        }
            </div>

        <Description>
          {movie?.overview}
        </Description>

        <Button onClick={()=>getMovie()}>Sortear</Button>
      </MoviePreferences>
      
    </Container>
  );
}

export default App;
