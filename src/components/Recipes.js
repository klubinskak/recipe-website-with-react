import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";


const Recipes = () => {
  const APP_ID = '167316c3';
  const APP_KEY = '4156988e5933e7b865d3f9d9ccba7a18';
  
  const[recipes, setRecipes] = useState([]);
  const[search, setSearch] = useState('');
  const [query, setQuery] = useState('pasta')
  var calories = 0;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);

  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
        <section id="recipes">
            <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" placeholder='Search for recipe' value={search} onChange={updateSearch}/>
            <button className='btn-search'>Search</button>
            </form>
            <div className="recipes">
                {recipes.map(recipe => (
                calories = Math.round(recipe.recipe.calories),
                <Recipe title={recipe.recipe.label} calories= {calories} src={recipe.recipe.image} url={recipe.recipe.url} mealType={recipe.recipe.mealType}/>
                ))}
            </div>
        </section>
  )
}

export default Recipes