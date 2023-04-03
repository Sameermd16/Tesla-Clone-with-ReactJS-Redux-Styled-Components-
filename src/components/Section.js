import React from 'react'
import styled from 'styled-components'

function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
        <Buttons>
          <ButtonGroup>
            <LeftButton> {leftBtnText} </LeftButton>
            {rightBtnText && 
            <RightButton> {rightBtnText} </RightButton>
            }
          </ButtonGroup>
          <DownArrow src='/images-2/down-arrow.svg'/>
        </Buttons>
    </Wrap>
  )
}

export default Section


const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  // background: orange;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  // background-image: url('/images-2/model-3.jpg');
  // background: url('/images-2/model-3.jpg') no-repeat center center / cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;  //vertical
  align-items: center;   //horizontal
  background-image: ${props => `url("/images-2/${props.bgImage}")`}
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    p {
      font-size: 20px;
      padding-top: 10px;
    }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

const LeftButton = styled.div`
  background: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 0.85;
  font-size: 14px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;

`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
`;