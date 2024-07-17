import './App.css'
import React, { useState } from 'react';
import axios from 'axios';
import InputForm from './components/InputForm';
import RecipeList from './components/RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_ID = 'e0291981';
  const API_KEY = 'e24bc481aacefc2ac672e141673adf5e';

  const fetchRecipes = async (ingredients) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${ingredients.join('+')}&app_id=${API_ID}&app_key=${API_KEY}`
      );
      console.log('API Response:', response.data);
      setRecipes(response.data.hits.map(hit => hit.recipe));
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
    setLoading(false);
  };
  

  return (
    <div className="App">
      <h1>Recipe Suggestor</h1>
      <InputForm fetchRecipes={fetchRecipes} />
      {loading ? <p>Loading...</p> : <RecipeList recipes={recipes} />}
    </div>
  );
}

export default App;
