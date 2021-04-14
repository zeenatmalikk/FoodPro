import {  Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Navhead.css";



const useStyles = makeStyles({
  onheading: {
    "&:hover": {
      color: "#FC8019",
    },
  },
});

export const Navhead = () => {
  const classes = useStyles();

  return (
    <div>
      <div style={{ display: "flex", marginInline: 570 }}>
          <img  src="https://www.flaticon.com/svg/vstatic/svg/4108/4108800.svg?token=exp=1618236291~hmac=3533afe28974921d86ebc13b5f7b808c" className="logo"/>
        <h1 className="Heading">Fooood</h1>
        <h1 className="Heading2">Prooo</h1>
      </div>
      <Grid container>
        <Grid item md={2} />
        <Grid item md={8} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        
            <Link style={{textDecoration:"none"}} to="./megamenu">
            <Typography className={classes.onheading} style={{fontSize:24,marginInline:20, fontFamily:"serif", fontWeight:"bold",}}>Mega Menu</Typography>
            </Link>
            <Link style={{textDecoration:"none"}} to="./seafood">
            <Typography className={classes.onheading} style={{fontSize:24,marginInline:20, fontFamily:"serif", fontWeight:"bold",}}>Sea food</Typography>
            </Link>
           <Link style={{textDecoration:"none"}} to="./streetf">
           <Typography className={classes.onheading} style={{fontSize:24,marginInline:20, fontFamily:"serif", fontWeight:"bold",}}>Street Food</Typography>
           </Link>
            <Link style={{textDecoration:"none"}} to="./thaif">
            <Typography className={classes.onheading} style={{fontSize:24,marginInline:20, fontFamily:"serif", fontWeight:"bold",}}>Thai food</Typography>
            </Link>
            <Link style={{textDecoration:"none"}} to="./breakf">
            <Typography className={classes.onheading} style={{fontSize:24,marginInline:20, fontFamily:"serif", fontWeight:"bold",}}>Breakfast</Typography>
            </Link>
            <Link style={{textDecoration:"none"}} to="./contact">
            <Typography className={classes.onheading} style={{fontSize:24,marginInline:20, fontFamily:"serif", fontWeight:"bold",}}>Contact</Typography>
            </Link>
 
        </Grid>
        <Grid item md={2} />
      </Grid>
    </div>
  );
};
