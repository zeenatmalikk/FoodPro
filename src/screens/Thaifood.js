import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import "./Thaifood.css"

const data = [
    {
      img:
        "https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/3.png",
      name: "Roasted chicken breast with lime",
      auth: "George steven .29/03/2020 ",
      desc:
        "Nova was the videoly that we all wanted to read in the Sixties because every issue brought something new and relevant to our lives: extraordinary fashion by Molly Parkin; innovative layouts and photographs by Harri ...",
    },
    {
      img:
        "https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/2.png",
     name: "Perfect burger",
      auth: "George steven .29/03/2020 ",
      desc:
        "Nova was the videoly that we all wanted to read in the Sixties because every issue brought something new and relevant to our lives: extraordinary fashion by Molly Parkin; innovative layouts and photographs by Harri ...",
    },
    {
      img:
        "https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/1.png",
     name: "Tempura lobster with dipping sauce",
      auth: "George steven .29/03/2020 ",
      desc:
        "Nova was the videoly that we all wanted to read in the Sixties because every issue brought something new and relevant to our lives: extraordinary fashion by Molly Parkin; innovative layouts and photographs by Harri ...",
    },
    {
      img:
        "https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/03/8.jpg",
     name: "Eat fresh and healthy with secret hacks",
      auth: "George steven .29/03/2020 ",
      desc:
        "Nova was the videoly that we all wanted to read in the Sixties because every issue brought something new and relevant to our lives: extraordinary fashion by Molly Parkin; innovative layouts and photographs by Harri ...",
    },
  ];

export const Thaifood = () => {
    return (
        <div>
           <h1 className="thaif">Categories: Thai Food</h1> 
           {data.map((item)=>(
    <Grid container>
        <Grid item md={3}>
          <img src={item.img} className="recimg"/>
        </Grid>
        <Grid item md={8}>
        <Typography style={{fontSize:22, fontFamily:"fantasy", letterSpacing:3, marginTop:"7%"}}>{item.name}</Typography>
            <Typography style={{fontSize:16, fontFamily:"sans-serif", color:"gray", marginTop:"1%"}}>{item.auth}</Typography>
            <Typography style={{fontSize:17, fontFamily:"sans-serif", marginTop:"1%"}}>{item.desc}</Typography>
          
        </Grid>
    </Grid>
))}
        </div>
    )
}
