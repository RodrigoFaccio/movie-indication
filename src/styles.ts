import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: black;  
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;  
`;

export const MoviePreferences = styled.div`
flex-direction: column;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
align-content: center;
margin-top: 10px;
` 

export const Image = styled.img`
    width:80%;
    height: 80%;
    border-radius: 8px;
    object-fit: fill;
`;
export const Title = styled.h3`
  color: black;
  font-size: larger;
  text-transform: uppercase;
  color: white;
  margin-bottom: -20px;
`;
export const Description = styled.p`
  background-color: white;
  color: black;
  width: 82%;
  border: 1px solid white;  
  padding: 10px;
  border-radius: 8px;
  font-weight: 500;
`;
export const Button = styled.button`
  border: none;
  background-color: purple;
  margin-bottom: 40px;
  border-radius: 8px;
  width: 120px;
  height: 40px;
  cursor: pointer;
  color: white;
  font-weight: 600;
  font-size: medium;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

export const MovieContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 align-content: center;
 flex-direction: column;
 border: 2px solid white;
 border-radius: 8px;
 height: 500px;
 width: 500px;
 background-color: none ;
 margin: 0;
 margin-top: 5px; 
`

export const Genres = styled.div`
background-color: white;
color: black;
position: fixed;

`
export const Forms = styled.form`
background-color: purple;
margin: 10px;
height: 90%;
border: 1px solid purple;
`
export const Input = styled.select`
color: purple;
width: 100%;
padding: 10px 2px;
border: none;
font-size: medium;
font-weight: 700;


:focus{
  outline: none;
}
`

export const Label = styled.label`
font-weight: 700;
color: white;
margin: 10px 0;
font-size: large;
display: block;
`
export const PreferenceContainer = styled.div`
flex-direction: column;
width: 50%;
height: 100%;
justify-content: space-between;
border: 2px solid white;
border-radius: 8px;
padding: 10px;
margin: 30px;
background-color: purple;
`


export const TitlePreferences = styled.h1`
color: white;
text-align: center;
`
