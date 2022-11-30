import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './imgSlide.css'

function StoreImageSlider() {
  const imagesArr = [1,2,3,4,5]
  return (

    <div >

    <Carousel id={'store-imgSlider-Resp'}>
     
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={`/images/${imagesArr[0]}.jpg`}
        alt="First slide"
        style={{maxHeight: '500px'}}
        />
      <Carousel.Caption >
        <h3>BASHIR</h3>
        <p>The Netlify Sherif</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={`/images/${imagesArr[1]}.jpg`}
        alt="Second slide"
        style={{maxHeight: '500px'}}
        />
      <Carousel.Caption>
        <h3>Omer </h3>
        <p>Firebase Fighter and Kyle Fan</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={`/images/${imagesArr[2]}.jpg`}
        alt="Third slide"
        style={{maxHeight: '500px'}}
      />
      <Carousel.Caption>
        <h3>Ahmed</h3>
        <p>
          Mordiiiiiiiiii
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={`/images/${imagesArr[3]}.jpg`}
        alt="First slide"
        style={{maxHeight: '500px'}}
        />
      <Carousel.Caption>
        <h3>Yael</h3>
        <p>React Victim</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={`/images/${imagesArr[4]}.jpg`}
        alt="First slide"
        style={{maxHeight: '500px',width: '200px'}}
        />
      <Carousel.Caption>
        <h3>Meir</h3>
        <p>The CSS Warrior and one more Coffee </p>
      </Carousel.Caption>
    </Carousel.Item>
   
  </Carousel>
        </div>
  )
}

export default StoreImageSlider