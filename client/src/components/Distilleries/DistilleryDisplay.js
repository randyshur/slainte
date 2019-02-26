import React from 'react';
import Background from '../../assets/images/buffalo-tracebw.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
height: 55vh;
margin: auto;
background-image: url(${Background});
background-size: cover;
`;

const Header = styled.h1`
@import url('./assets/fonts/druidhill-webfont.woff');
font-family: 'druidhill', sans-serif;
font-size: calc(96px + 5vw);
text-align: center;
-webkit-text-stroke: 1px red;
color: black;
text-shadow:
    3px 3px 0 #000,
  -1px -1px 0 #000,  
   1px -1px 0 #000,
   -1px 1px 0 #000,
    1px 1px 0 #000;
`;


const DistilleryDisplay = () => {
  return (
      <Wrapper>
        <Header>Distilleries</Header>
      </Wrapper>
  )
}

export default DistilleryDisplay;