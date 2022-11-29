import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './imgSlide.css'

function StoreImageSlider({gamesList}) {
  const imagesArr = [1,2,3,4,5]
  return (

    <div >

    <Carousel >
     
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={`/images/${imagesArr[0]}.jpg`}
        alt="First slide"
        style={{maxHeight: '500px'}}
        />
      <Carousel.Caption>
        <h3>BASHIR</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={`/images/${imagesArr[4]}.jpg`}
        alt="First slide"
        style={{maxHeight: '500px'}}
        />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
   
  </Carousel>
        </div>
  )
}

export default StoreImageSlider