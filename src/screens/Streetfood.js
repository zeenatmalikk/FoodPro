import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import "./Streetfood.css"

const data = [
    {
      img:
        "https://i.pinimg.com/originals/01/59/64/015964b2464df7b3573a8611249add61.jpg",
      name: "Fish Tacos and fries",
      auth: "George steven .29/03/2020 ",
      desc:
        "Nova was the videoly that we all wanted to read in the Sixties because every issue brought something new and relevant to our lives: extraordinary fashion by Molly Parkin; innovative layouts and photographs by Harri ...",
    },
    {
      img:
        "https://wallpapercave.com/wp/wp2691065.jpg",
     name: "Mexican hot dog with chips",
      auth: "George steven .29/03/2020 ",
      desc:
        "Nova was the videoly that we all wanted to read in the Sixties because every issue brought something new and relevant to our lives: extraordinary fashion by Molly Parkin; innovative layouts and photographs by Harri ...",
    },
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB8ngGAzLQCRjnd-cLhtnmlNL40Ow8oA_20w&usqp=CAU",
     name: "Pip's original donuts",
      auth: "George steven .29/03/2020 ",
      desc:
        "Nova was the videoly that we all wanted to read in the Sixties because every issue brought something new and relevant to our lives: extraordinary fashion by Molly Parkin; innovative layouts and photographs by Harri ...",
    },
    {
      img:
        "https://image.freepik.com/free-photo/beef-steak-with-cheddar-cheese-lettuce-salad_99004-617.jpg",
     name: "Cheese steaks",
      auth: "George steven .29/03/2020 ",
      desc:
        "Nova was the videoly that we all wanted to read in the Sixties because every issue brought something new and relevant to our lives: extraordinary fashion by Molly Parkin; innovative layouts and photographs by Harri ...",
    },
  ];


export const Streetfood = () => {
    return (
        <div>
           <h1 className="streetf">
               Categories: Street Food
           </h1>
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
