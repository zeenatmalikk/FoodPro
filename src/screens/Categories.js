import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'

import "./Categories.css"
const data=[{
    img:"https://image.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg",
    desc:"Italian"
},
{
img:"https://image.freepik.com/free-photo/stir-fry-chicken-sweet-peppers-green-beans_2829-20110.jpg",
desc:"Thai"
},
{
img:"https://image.freepik.com/free-photo/toast-egg-bacon-tomatoes-microgreens-salad_2829-4806.jpg",
desc:"Breakfast"
},
{
img:"https://image.freepik.com/free-photo/delicious-arrangement-with-junk-food_23-2148289396.jpg",
desc:"Chinese"
}]

export const Categories = () => {
    return (
        <div style={{display:"flex"}}>
            {data.map((abc)=>(
               <Grid container >
                   <Grid item md={1}/>
                   <Grid item md={10} >
                       <div>
                   {/* <Card className="cardstyle">
                    <CardContent > */}
                       <img src={abc.img} className="cuisines"/>
                       <Typography style={{fontFamily:"fantasy", fontSize:25, letterSpacing:3}}>{abc.desc}</Typography>
                    {/* </CardContent>
                </Card> */}
                </div>
                   </Grid>
                   <Grid item md={1}/>
               </Grid>
            ))}
        </div>
    )
}
