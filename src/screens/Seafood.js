import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "./Seafood.css";

const data = [
  {
    img:
      "https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/7.png",
    name: "Spagetthi Olio,agliio & spring greens",
    auth: "George steven .29/03/2020 ",
    desc:
      "Nova was the videoly that we all wanted to read in the Sixties because every issue brought something new and relevant to our lives: extraordinary fashion by Molly Parkin; innovative layouts and photographs by Harri ...",
  },
  {
    img:
      "https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/6.png",
   name: "Mexican black bean burger with lime",
    auth: "George steven .29/03/2020 ",
    desc:
      "Nova was the videoly that we all wanted to read in the Sixties because every issue brought something new and relevant to our lives: extraordinary fashion by Molly Parkin; innovative layouts and photographs by Harri ...",
  },
  {
    img:
      "https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/5.png",
   name: "Vegetables from home",
    auth: "George steven .29/03/2020 ",
    desc:
      "Nova was the videoly that we all wanted to read in the Sixties because every issue brought something new and relevant to our lives: extraordinary fashion by Molly Parkin; innovative layouts and photographs by Harri ...",
  },
  {
    img:
      "https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/8.png",
   name: "Unusual vegetable from our garden",
    auth: "George steven .29/03/2020 ",
    desc:
      "Nova was the videoly that we all wanted to read in the Sixties because every issue brought something new and relevant to our lives: extraordinary fashion by Molly Parkin; innovative layouts and photographs by Harri ...",
  },
];

export const Seafood = () => {
  return (
    <div style={{ marginTop: 20 }}>
      <div>
        <h1 className="categ">Category: Sea Food</h1>
      </div>

      {data.map((item) => (
        <Grid container>
          <Grid item md={3}>
            <img src={item.img} className="seaimg" />
          </Grid>
          <Grid item md={8}>
            <Typography style={{fontSize:22, fontFamily:"fantasy", letterSpacing:3, marginTop:"7%"}}>{item.name}</Typography>
            <Typography style={{fontSize:16, fontFamily:"sans-serif", color:"gray", marginTop:"1%"}}>{item.auth}</Typography>
            <Typography style={{fontSize:17, fontFamily:"sans-serif", marginTop:"1%"}}>{item.desc}</Typography>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};
