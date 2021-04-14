import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import "./Weeklyres.css"

const data=[{
    img:"https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/1.png",
    desc:"Tempura lobster with dipping sauce"
},
{
    img:"https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/5.png",
    desc:"Tempura lobster with dipping sauce"
},
{
    img:"https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/6.png",
    desc:"Tempura lobster with dipping sauce"
},
{
    img:"https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/03/8.jpg",
    desc:"Tempura lobster with dipping sauce"
},
{
    img:"https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/7.png",
    desc:"Tempura lobster with dipping sauce"
},
{
    img:"https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/3.png",
    desc:"Tempura lobster with dipping sauce"
}
]

export const Weeklyres = () => {
    return (
        <div style={{marginTop:"5%"}}>
            <h3 className="week">Weekly Recipes</h3>
            <hr className="line"/> 
            <div  style={{display:"flex"}}>
                {data.map((item)=>
                (
                    <Grid container>
                        <Grid item md={1}/>
                        <Grid item md={10}>
                    <img src={item.img} className="blgimg"/>
                    <Typography style={{fontSize:18, fontFamily:"fantasy", letterSpacing:3}}>
                        {item.desc}
                    </Typography>
                    </Grid>
                    <Grid item md={1}/>
                    </Grid>
                ))}
            </div>
        </div>
    )
}
