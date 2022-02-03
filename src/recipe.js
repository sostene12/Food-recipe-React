import react,{useState,useEffect} from "react";
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients}) => {
  return (
    <div className={style.recipe} >
     <h1>{title}</h1>
     <ol>
       {ingredients.map(ingredient =>(
         <li>{ingredient.text}</li>
       ))}
     </ol>
     <h3>Calories : {calories}</h3>
     <img src={image} alt="" className={style.image}/>
     
    </div>
  );
}
export default Recipe;

