import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "./Footer.css";
export const Footer = () => {
  return (
    <div style={{ marginTop: "5%", backgroundColor:"#111111" }}>
      <Grid container>
        <Grid item md={3}>
          <div style={{ display: "flex", marginTop:"50%" }}>
            <Typography
              style={{
                fontSize: 45,
                marginLeft: 20,
                color: "#FBAB28",
                fontWeight: "bold",
              }}
            >
              Fooood
            </Typography>
            <Typography
              style={{
                fontSize: 45,
                marginLeft: 6,
                color: "#B6B6B6",
                fontWeight: "bold",
              }}
            >
              Prooo
            </Typography>
          </div>
        </Grid>
        <Grid item md={4} style={{marginLeft:30}}>
          <Typography style={{
              fontSize:25,
              marginTop:15,
              color:"white",
              fontFamily: "sans-serif",
              letterSpacing: 2,
          }}>Recent posts</Typography>
          <div style={{ display: "flex" }}>
            <img
              className="imgpost"
              src="https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/1-300x212.png"
            />
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "10%",
                marginLeft: "5%",
                fontFamily: "sans-serif",
                letterSpacing: 2,
                color:"white"
              }}
            >
              Tempura lobster with dipping sauce
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <img
              className="imgpost"
              src="https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/1-300x212.png"
            />
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "10%",
                marginLeft: "5%",
                fontFamily: "sans-serif",
                letterSpacing: 2,
                color:"white"
              }}
            >
              Tempura lobster with dipping sauce
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <img
              className="imgpost"
              src="https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/1817/04/1-300x212.png"
            />
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "10%",
                marginLeft: "5%",
                fontFamily:"sans-serif",
                letterSpacing: 2,
                color:"white"
              }}
            >
              Tempura lobster with dipping sauce
            </Typography>
          </div>
        </Grid>
        <Grid item md={1} />

        <Grid item md={3} style={{ display: "flex",marginTop:"13%" }}>
          <img
            className="social "
            src="https://www.flaticon.com/svg/vstatic/svg/1384/1384063.svg?token=exp=1618291626~hmac=aa5198778fabb49730e748af1407b753"
          />
          <img
            className="social"
            src="https://www.flaticon.com/svg/vstatic/svg/1384/1384055.svg?token=exp=1618291586~hmac=42e89dc1f5d9cd05c17004ad06653b2a"
          />

          <img
            className="social fb "
            src="https://www.flaticon.com/svg/vstatic/svg/1384/1384053.svg?token=exp=1618291564~hmac=70c9a14821441ecf27d6b6c6d2835462"
          />

          <img
            className="social"
            src="https://www.flaticon.com/svg/vstatic/svg/1384/1384060.svg?token=exp=1618291525~hmac=74929017841830a9ea8528dc07d001fb"
          />
        </Grid>
      </Grid>
    </div>
  );
};
