import React from 'react';
import styled from 'styled-components';
import jack from '../assets/images/bottles/jack.png';
import bains from '../assets/images/bottles/Bains.png';
import blue from '../assets/images/bottles/bluefront.png';
import dalmore from '../assets/images/bottles/dalmore.png';
import wyo from '../assets/images/bottles/wyofront.png';
import woodford from '../assets/images/bottles/woodford.png';
import LeftButton from '../assets/images/ButtonLeft.png';
import RightButton from '../assets/images/ButtonRight.png';

const Wrapper = styled.div`
height: 40vh;
width: 100vw;
margin: auto;
background-image: linear-gradient(black, white);
`;
const Button = styled.div`
height: 40vh;
width: 10vw;
margin: auto;
`;
const Bottle = styled.div`
height: 40vh;
width: 10vw;
margin: auto;
text-align:center;
`;
const Helper = styled.span`
  display: inline-block;
  height: 100%;
  vertical-align: bottom;
`;
const BottleImage = styled.img`
max-width:100%;
max-height:100%;
`;
const ButtonHelper = styled.span`
  display: inline-block;
  height: 50%;
  vertical-align: center;
`;
const ButtonImage = styled.img`
max-width:80%;
max-height:100%;
`;


const Shelf = () => {
  return (
      <Wrapper>
        <div className="container-fluid p-0">
        <div className="row">
        <Button><ButtonHelper/><ButtonImage src={LeftButton} alt="jack"></ButtonImage></Button>
        <Bottle><Helper/><BottleImage src={bains} alt="jack"></BottleImage></Bottle>
        <Bottle><Helper/><BottleImage src={jack} alt="jack"></BottleImage></Bottle>
        <Bottle><Helper/><BottleImage src={blue} alt="jack"></BottleImage></Bottle>
        <Bottle><Helper/><BottleImage src={dalmore} alt="jack"></BottleImage></Bottle>
        <Bottle><Helper/><BottleImage src={wyo} alt="jack"></BottleImage></Bottle>
        <Bottle><Helper/><BottleImage src={woodford} alt="jack"></BottleImage></Bottle>
        <Bottle><Helper/><BottleImage src={blue} alt="jack"></BottleImage></Bottle>
        <Bottle><Helper/><BottleImage src={dalmore} alt="jack"></BottleImage></Bottle>
        <Button><ButtonHelper/><ButtonImage src={RightButton} alt="jack"></ButtonImage></Button>
        </div></div>
      </Wrapper>
  )
}

export default Shelf;