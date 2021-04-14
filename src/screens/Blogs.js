import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import MessageIcon from "@material-ui/icons/Message";
import React from "react";
import "./Blog.css";

const data=[{
    img:"https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/1-300x212.png",
    desc:"Tempura lobster with dipping sauce"
},
{
img:"https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/2-300x212.png",
desc:"Perfect burger recipe"
},
{
    img:"https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/3-300x212.png",
    desc:"Roasted chicken breast with bombay potatoes"
},
{
  img:"https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/6-300x212.png",
  desc:"mexican black bean burger"
}
]

// const data2=[{
//     img:"https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/03/8-768x542.jpg"
// }]

export const Blogs = () => {
  return (
    <div >
      <h4 className="featured">Featured Cuisines</h4>
      <hr className="new" />
      <div style={{display:"flex"}}>
       <Grid container  >
        <Grid item md={10} >
          {/* <Card className="blogcard">
            <CardContent> */}
              <img
                src="https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/03/8-768x542.jpg"
                className="blogimg"
              />
              <Typography className="blogfontsub" style={{marginLeft:12, marginTop:6, fontWeight:"bold",}}>Breakfast Thai food</Typography>
              <Typography className="blogfont" style={{marginLeft:12, marginTop:6, fontWeight:"bold",fontSize:20}}>
                Eat healthy & fresh with secret hacks
              </Typography>
              <Typography className="blogfontsub"  style={{marginLeft:12, marginTop:6, fontWeight:"bold",}}>
              George Steven March 23, 2017
              </Typography> 
               <div style={{ display: "flex", marginTop: 20, marginLeft:"4%" }}>
                <MessageIcon />
                <Typography> 0 comment</Typography>
              </div>
            {/* </CardContent>
          </Card> */}
          </Grid>
          </Grid> 
     


          {data.map((item)=>(
              <Grid container >
                 
 <Grid item md={8}  >
{/* <Card className="blogsub"  >
    <CardContent> */}
        <img src={
            item.img
        } className="blogsub"/>
        <Typography className="blogsub2" style={{marginLeft:"15%", fontsize: "18px", fontFamily:"fantasy", letterSpacing:3}}>
          {item.desc}
        </Typography>
    {/* </CardContent>
</Card> */}
 </Grid>
 </Grid>
          ))}
         
        </div>
    </div>
  );
};
