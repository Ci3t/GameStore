import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './imgSlide.css'

function StoreImageSlider() {
  const imagesArr = [1,2,3,4,5]
  return (

    <div id='gamestore-imgSlider-Cont1'>

    <Carousel id={'store-imgSlider-Resp'}>
     
    <Carousel.Item id={'gamestore-item-imgBorder'} interval={1000}>
      <img
        className="d-block w-100"
        src={`/images/${imagesArr[0]}.jpg`}
        alt="First slide"
        style={{maxHeight: '500px'}}
        />
    
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={`/images/${imagesArr[1]}.jpg`}
        alt="Second slide"
        style={{maxHeight: '500px'}}
        />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={`/images/${imagesArr[2]}.jpg`}
        alt="Third slide"
        style={{maxHeight: '500px'}}
      />
    
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={`/images/${imagesArr[3]}.jpg`}
        alt="First slide"
        style={{maxHeight: '500px'}}
        />
     
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={`/images/${imagesArr[4]}.jpg`}
        alt="First slide"
        style={{maxHeight: '500px',width: '200px'}}
        />
      {/* <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption> */}
    </Carousel.Item>
   
  </Carousel>
        </div>
  )
}

export default StoreImageSlider