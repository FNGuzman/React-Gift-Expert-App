import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {


    const { data:images, loading } = useFetchGifs( category );


    

   


    return (
        <>
        <h3 className="animate__animated animate__fadeIn animate__delay-0.5s"> { category }</h3>
       { loading && <p className="animate__animated animate__flash">Loading</p>}

        <div className="row row-cols-1 row-cols-md-3 g-4">
          
            
               {
                   images.map ( img => (
                    <GifGridItem 
                    key={img.id}
                    { ...img }/>
                   ))
               }
           
            
          
        </div>
        </>
    )
}

export default GifGrid
