import React from 'react'

function GifGridItem( {id,title,url} ) {

    console.log(id,title,url);
    return (
        
       
        <div className="col-sm-3">
        <div className="card  h-100 border-dark mb-3 ">
           <img className="card-img-top h-50" src= { url } alt={title} />
           <div className="card-body h-50">
           <h5 className="card-text">{title}</h5>
           </div>
           </div>
           </div>
       
        
    )
}

export default GifGridItem;
