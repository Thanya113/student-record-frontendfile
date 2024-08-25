// Achieve.js
import React from 'react';
import styled from 'styled-components';


const AchieveContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
`;

const FlipBoxContainer = styled.div`
  background-color: transparent;
  width: 300px;
  height: 200px;
  margin: 10px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
`;

const FlipBoxInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const FlipBoxFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #bbb;
  color: black;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`;

const FlipBoxBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #a35de4;
  color: white;
  transform: rotateY(180deg);
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Achieve = () => {
  return (
    <div className="container">
      <h1 className="text-center" style={{ paddingTop: '3%' }}>
        Achievements
      </h1>
      
      <AchieveContainer>
        {/* Image Flip Card 1 */}
        <FlipBoxContainer>
          <FlipBoxInner>
            <FlipBoxFront>
              <Img src="img1.jpg" alt="Paris" />
            </FlipBoxFront>
            <FlipBoxBack>
              <h2>Paris</h2>
              <p>What an amazing city</p>
            </FlipBoxBack>
          </FlipBoxInner>
        </FlipBoxContainer>
      
        {/* Repeat similar structure for Image Flip Cards 2-6 */}
        {/* ... */}
        <FlipBoxContainer>
          <FlipBoxInner>
            <FlipBoxFront>
              <Img src="img_paris.jpg" alt="Paris" />
            </FlipBoxFront>
            <FlipBoxBack>
              <h2>Paris</h2>
              <p>What an amazing city</p>
            </FlipBoxBack>
          </FlipBoxInner>
        </FlipBoxContainer>
        <FlipBoxContainer>
          <FlipBoxInner>
            <FlipBoxFront>
              <Img src="img_paris.jpg" alt="Paris" />
            </FlipBoxFront>
            <FlipBoxBack>
              <h2>Paris</h2>
              <p>What an amazing city</p>
            </FlipBoxBack>
          </FlipBoxInner>
        </FlipBoxContainer>
        <FlipBoxContainer>
          <FlipBoxInner>
            <FlipBoxFront>
              <Img src="img_paris.jpg" alt="Paris" />
            </FlipBoxFront>
            <FlipBoxBack>
              <h2>Paris</h2>
              <p>What an amazing city</p>
            </FlipBoxBack>
          </FlipBoxInner>
        </FlipBoxContainer>
        <FlipBoxContainer>
          <FlipBoxInner>
            <FlipBoxFront>
              <Img src="img_paris.jpg" alt="Paris" />
            </FlipBoxFront>
            <FlipBoxBack>
              <h2>Paris</h2>
              <p>What an amazing city</p>
            </FlipBoxBack>
          </FlipBoxInner>
        </FlipBoxContainer>
       
      </AchieveContainer>
    </div>
  );
};

export default Achieve;
