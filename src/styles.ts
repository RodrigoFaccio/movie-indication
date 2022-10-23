import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: gray;
  flex-direction: column;
`;
export const Image = styled.img`
    width:25%;
    height: 50%;
`;
export const Title = styled.h3`
  color: black;
`;
export const Description = styled.p`
  color: black;
  width: 50%;
`;
export const Button = styled.button`
  border: none;
  background-color: aqua;
  margin-bottom: 40px;
  border-radius: 8px;
  width: 100px;
  height: 50px;
  cursor: pointer;
`;
