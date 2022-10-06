import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import CircularProgress from "@mui/material/CircularProgress";
import { textAlign } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [query, setQuery] = useState("chicken");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState("lunch");
  const APP_KEY = "3cde9e853ac30b4dfd6e6971fa023393";
  const APP_ID = "0bfed9b1";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = () => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRecipeData(data.hits))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(recipeData);

  return (
    <>
      <Navbar />
      {isLoading && (
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ height: "100vh" }}>
            <CircularProgress />
          </Box>
        </Container>
      )}

      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {recipeData.map((item, index) => {
              return (
                <Grid item key={index}>
                  <Item>
                    <Cards recipeData={item} />
                  </Item>
                  ;
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
