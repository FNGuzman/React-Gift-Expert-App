import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {

    const [categories, setCategories] = useState([]);

    // const handleAdd = () =>{
    //     // setCategories( [...categories, 'HxH'] );
    //     setCategories(catego => [...catego, 'HxH'] );
    // };

    

    return (
        <>
        <h2>
            Buscador de gif Mamalooon
        </h2>

        <AddCategory setCategories={ setCategories } />

        <hr />

        <ol>
            { 
                categories.map( category => (
                        <GifGrid 
                        key = { category }
                        category={ category }
                        
                        />
                )) 
             }
        </ol>
        
        </>
    )
}

export default GifExpertApp;
