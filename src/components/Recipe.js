import React from 'react';

const Recipe = ({title,src, calories,url, mealType}) => {
    return (
        <div className='recipe-card'> 
            <a className='a-class' href={url}>
                <img className='recipe-img' src={src} alt=""></img>
                <br/>
                <h1 className='title'>{title}</h1>
            </a>
            <p>{calories} kcal</p>
            <span className="mealType">{mealType}</span>
        </div>
    )
}

export default Recipe;