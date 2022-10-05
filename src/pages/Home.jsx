import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const [recipeData, setRecipeData] = useState();
  const [query, setQuery] = useState("chicken");
  const [selectedMeal, setSelectedMeal] = useState("lunch");
  const APP_KEY = "3cde9e853ac30b4dfd6e6971fa023393";
  const APP_ID = "0bfed9b1";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRecipeData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(recipeData);

  return (
    <div>
      {/* <Navbar /> */}
    </div>
  );
};

export default Home;
