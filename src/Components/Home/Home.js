import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from'../../images/img1.jpg'
import img2 from'../../images/img2.jpg'
import img3 from'../../images/img3.jpg'
import Categories from '../Categories/Categories';
import'./Home.css'

const Home = () => {
    return (
       <div>
          <div className='carousel'>
             <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Wedding Photography</h3>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Fashion Photography</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Outdoor Photography</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        <div>
         <Categories></Categories>
        </div>
       </div>
    );
};

export default Home;