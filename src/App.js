import react,{useState,useEffect} from "react";
import Recipe from "./recipe";
import "./App.css";

const App = () => {
  const APP_ID = '20914156';
  const APP_KEY = '82e3fdae7193f0f57b97ea64b3b7ebd0	';

  //state from api
  const [recipes,setRecipes] = useState([]);
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  } 

  // state of searching
  const [search,setSearch] = useState('');
  // onchange function
   const updateSearch = e =>{
    setSearch(e.target.value)
    console.log(search);
  }

    const [query,setQuery] = useState('chicken');

 const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  getSearch(""); 
}
  
 

   // use effect
   useEffect( async () =>{
    getRecipes();
  },[query]);
 

//function of fetching recipes


  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch} >
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit" >Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label} 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}
export default App;

