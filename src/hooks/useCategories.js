import { useEffect, useState } from 'react';

const useCategories = () => {
    const [categories,setCategories]=useState([])
        useEffect(()=>{
        fetch('data.json')
        .then(response=>response.json())
        .then(data=>setCategories(data))
    },[])
    return[categories,setCategories]
        
 
};

export default useCategories;