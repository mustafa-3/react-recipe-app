import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";

export default function About() {
  return (
    <>
      <Navbar />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "calc(100vh - 130px)",
          
        }}
      >
        <Card sx={{ maxWidth: 545 }}>
          <CardMedia
            component="img"
            height="340"
            width="340"
            image={"https://i.pravatar.cc/"}
            alt="green iguana"
            sx={{}}
          />
          <CardContent sx>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign="center"
            >
              About Software Developer ED BEN
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I'm Ed.
            </Typography>
            <Typography paragraph variant="body2" color="text.secondary">
              I'm currently learning Full-Stack Development Languages.
            </Typography>
            <Typography paragraph variant="body2" color="text.secondary">
              I've already known JS,ReactJS, ReactNative, NodeJS, MongoDB, SQL,
              Python, AWS Services
            </Typography>
            <Typography paragraph variant="body2" color="text.secondary">
              Send email : edwardbenedict92@gmail.com
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
