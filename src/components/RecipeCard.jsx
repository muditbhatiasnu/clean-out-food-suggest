import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div>
      <h3>{recipe.label}</h3>
      <img src={recipe.image} alt={recipe.label} />
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeCard;
