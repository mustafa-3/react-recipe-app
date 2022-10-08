import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import { height } from "@mui/system";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Detail = () => {
  const { state } = useLocation();

  const {
    image,
    ingredientLines,
    totalNutrients,
    label,
    mealType,
    totalWeight,
  } = state.recipe;
  console.log(state);

  const navigate = useNavigate();

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

      <Grid
        container
        sx={{
          // display: "flex",
          // flexGrow:1,
          // flexBasis:0,
          // margin:"auto",
          // justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 200px)",
        }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <Box
              sx={
                {
                  // textAlign: "center",
                }
              }
            >
              <Typography paragraph component={"span"} variant={"body1"}>
                {ingredientLines.map((line, index) => (
                  <div key={index}>
                    {index + 1} - {line}
                  </div>
                ))}
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card
                sx={{
                  maxWidth: 345,
                }}
              >
                <CardMedia component="img" image={image} alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {mealType}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            {" "}
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                component={"span"}
                variant="body2"
                color="text.secondary"
              >
                <div>
                  {totalNutrients.CA.label}:
                  {Math.round(totalNutrients.CA.quantity)}
                </div>
                <div>
                  {totalNutrients.CHOLE.label}:
                  {Math.round(totalNutrients.CHOLE.quantity)}
                </div>
                <div>
                  {totalNutrients.ENERC_KCAL.label}:
                  {Math.round(totalNutrients.ENERC_KCAL.quantity)}
                </div>
                <div>
                  {totalNutrients.FAT.label}:
                  {Math.round(totalNutrients.FAT.quantity)}
                </div>
                <div>
                  {totalNutrients.FE.label}:
                  {Math.round(totalNutrients.FE.quantity)}
                </div>
                <div>
                  {totalNutrients.K.label}:
                  {Math.round(totalNutrients.K.quantity)}
                </div>
                <div>
                  {totalNutrients.MG.label}:
                  {Math.round(totalNutrients.MG.quantity)}
                </div>
                <div>
                  {totalNutrients.PROCNT.label}:
                  {Math.round(totalNutrients.PROCNT.quantity)}
                </div>
                <div>
                  {totalNutrients.SUGAR.label}:
                  {Math.round(totalNutrients.SUGAR.quantity)}
                </div>
                <div>
                  {totalNutrients.VITB12.label}:
                  {Math.round(totalNutrients.VITB12.quantity)}
                </div>
                <div>
                  {totalNutrients.VITC.label}:
                  {Math.round(totalNutrients.VITC.quantity)}
                </div>
                <div>
                  {totalNutrients.VITD.label}:
                  {Math.round(totalNutrients.VITD.quantity)}
                </div>
                <div>totalWeight: {Math.round(totalWeight)}</div>
              </Typography>
            </Box>
          </Item>
          <Stack
            spacing={2}
            direction="row"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <Button variant="contained" onClick={() => navigate(-1)}>
              Go Back
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Detail;
