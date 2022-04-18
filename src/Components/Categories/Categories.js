import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useCategories from '../../hooks/useCategories';
import Category from '../Category/Category';
import Service from '../Category/Category';

const Categories = () => {
    const navigate=useNavigate()
    const [categories,setCategories]=useCategories()
    return (
        < div className='row m-5 g-3'>
            <h3 className='text-center text-info'>Featured Categories</h3>
        
         {
           window.location.pathname=== '/categories'?categories.map((category,index)=><Category key={index} category={category}></Category>):categories.slice(0,3).map((category,index)=><Category key={index} category={category}></Category>)
               
           }
           {
                window.location.pathname!== '/categories' && <Button onClick={()=>{navigate('/categories')
            }} className='btn btn-info text-light w-25 mx-auto mt-4 '>See All Categories</Button>
           }

        
        </div>
    );
};

export default Categories;