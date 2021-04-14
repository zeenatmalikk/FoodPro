import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import "./Breakfast.css"

const data = [
    {
      img:
        "https://image.freepik.com/free-photo/pancakes-with-maple-syrup-plate_230311-52.jpg",
      name: "Pancakes and Maple syrup",
      auth: "George steven .29/03/2020 ",
      desc:
        "Nova was the videoly that we all wanted to read in the Sixties because every issue brought something new and relevant to our lives: extraordinary fashion by Molly Parkin; innovative layouts and photographs by Harri ...",
    },
    {
      img:
        "https://img.freepik.com/free-photo/close-up-fresh-egg-benedict-breakfast-with-black-coffee-orange-juice_1258-333.jpg?size=626&ext=jpg",
     name: "Eggs benedict",
      auth: "George steven .29/03/2020 ",
      desc:
        "Nova was the videoly that we all wanted to read in the Sixties because every issue brought something new and relevant to our lives: extraordinary fashion by Molly Parkin; innovative layouts and photographs by Harri ...",
    },
    {
      img:
        "https://image.freepik.com/free-photo/bagels-with-cream-cheese_72772-6425.jpg",
     name: "Bagel with cream cheese",
      auth: "George steven .29/03/2020 ",
      desc:
        "Nova was the videoly that we all wanted to read in the Sixties because every issue brought something new and relevant to our lives: extraordinary fashion by Molly Parkin; innovative layouts and photographs by Harri ...",
    },
    {
      img:
        "https://mk0foodfornetcoviwv0.kinstacdn.com/wp-content/uploads/2015/06/shutterstock_289605860.jpg",
     name: "Cinnamon rolls",
      auth: "George steven .29/03/2020 ",
      desc:
        "Nova was the videoly that we all wanted to read in the Sixties because every issue brought something new and relevant to our lives: extraordinary fashion by Molly Parkin; innovative layouts and photographs by Harri ...",
    },
  ];


export const Breakfast = () => {
    return (
        <div>
            <h1 className="breakf">Categories: Breakfast</h1>
            {data.map((item)=>(
    <Grid container>
        <Grid item md={3}>
          <img src={item.img} className="img"/>
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
