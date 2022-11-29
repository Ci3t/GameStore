import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './gameinfo.css'
function GameInfoImgSlider({gameData}) {
  return (
    <Carousel fade>
        {gameData.screenshots && gameData.screenshots.map(img=>(
              <Carousel.Item  className='gameInfoSlider'>
              <img
                className="d-block w-100"
                src={img.image}
                alt="First slide"
                style={{maxHeight: '500px',maxWidth: '1900px'}}
                onLoad={()=>{
                    console.log('LOADEDDDD');
                }}
              />
              <Carousel.Caption>
                <h3>IN GAME SCREENSHOTS</h3>
                <p>all rights reserved to {gameData.developer} </p>
              </Carousel.Caption>
            </Carousel.Item>
        ))}
     
    </Carousel>
  )
}

export default GameInfoImgSlider