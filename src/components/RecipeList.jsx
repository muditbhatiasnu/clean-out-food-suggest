import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes }) {
  if (!recipes || recipes.length === 0) {
    return <p>No recipes found</p>;
  }

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
