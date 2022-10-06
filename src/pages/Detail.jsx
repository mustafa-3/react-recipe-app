import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
import { height } from "@mui/system";
import Box from "@mui/material/Box";

const Detail = () => {
  const { state } = useLocation();
  const { image, ingredientLines, totalNutrients, label, mealType } =
    state.recipe;
  console.log(state);
  return (
    <>
      <Navbar />
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h2" color="text.secondary">
          {label}
        </Typography>
      </Box>

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 200px)",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {ingredientLines}
          </Typography>
        </Box>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" image={image} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {mealType}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            <div>
              {totalNutrients.CA.label}:{Math.round(totalNutrients.CA.quantity)}
            </div>
            <div>
              {totalNutrients.CHOLE.label}:
              {Math.round(totalNutrients.CHOLE.quantity)}
            </div>
            <div>
              {totalNutrients.CA.label}:{Math.round(totalNutrients.CA.quantity)}
            </div>
            <div>
              {totalNutrients.CA.label}:{Math.round(totalNutrients.CA.quantity)}
            </div>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Detail;
