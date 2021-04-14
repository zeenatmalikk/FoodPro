import { Card, Grid, Typography, CardContent } from "@material-ui/core";
import React from "react";
import "./Contact.css";
export const Contact = () => {
  return (
    <div>
      <h1 className="cont">Contact</h1>
      <Grid container>
        <Grid item md={1} />
        <Grid item md={7}>
          <Typography
            style={{ fontSize: 27, fontWeight: "bold", marginTop: "8%" }}
          >
            Get In Touch
          </Typography>
          <Typography className="desc" style={{ marginTop: "4%" }}>
            We love to hear from you, but we might not reply as quick as you
            expect due to high volume of emails. Please give us at least 18
            hours before re-sending your email.<br></br> <br></br>
            Lastly, if you have any question, please be as detailed as you can,
            so we can reply to you with the most useful answer to your question.
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Card className="cardstyle">
            <CardContent>
              <hr></hr>
              <h3>About us</h3>
              <hr></hr>
              <img
                className="about"
                src="https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148706052.jpg?size=626&ext=jpg"
              />
              <Typography style={{marginTop:"4%", fontSize:"13px", lineHeight:"21px",fontWeight:400,color:"#666666", justifyContent:"center", alignItems:"center", display:"flex"}}>
                Magazine Pro is a online magazine that focuses on popular
                culture. It was founded in San Francisco in 2011 by Jann Wenner.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
