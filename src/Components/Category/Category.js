import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import'./Category.css'

const Category = ({category}) => {
    const{id,categories,image,description}=category;
    const navigate=useNavigate()
    const handleBooking=(id)=>{
        navigate(`/categories/${id}`)
    }
    return (
        <div className='col-md-4 '>
            
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className='p-2' src={image} width="286" height="280"/>
  <div className='m-3'>
  <Card.Body>
    <Card.Title className='text-info'>{categories}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Button onClick={()=>handleBooking(id)}  variant="info text-light ms-5">Booking Now</Button>
  </Card.Body>
  </div>
</Card>
              </div>
    );
};

export default Category;