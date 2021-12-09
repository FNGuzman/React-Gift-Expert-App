import React, { useState } from 'react'
import PropTypes from 'prop-types';

function AddCategory( { setCategories } ) {

    const [inputValue, setImputValue] = useState('');

    const handleImputChange = (e) =>{
        setImputValue ( e.target.value )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length >= 1  ){
            setCategories( [inputValue] );
            setImputValue('');
        }
       
    }

    return (
        <>
        <form onSubmit={ handleSubmit }>
           <input 
                type="text"
                value={ inputValue }
                onChange= { handleImputChange }
           />
           </form>
        </>
    )
}

export default AddCategory;

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
