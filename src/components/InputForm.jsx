import React, { useState } from 'react';

function InputForm({ fetchRecipes }) {
  const [ingredients, setIngredients] = useState('');

  const handleInputChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ingredientsArray = ingredients.split(',').map(ingredient => ingredient.trim());
    fetchRecipes(ingredientsArray);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Ingredients (comma-separated):
        <input type="text" value={ingredients} onChange={handleInputChange} />
      </label>
      <button type="submit">Find Recipes</button>
    </form>
  );
}

export default InputForm;
