import { Grid,Card, CardContent,Typography  } from "@material-ui/core";
import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from "@material-ui/core/styles";

import "./Offers.css";

const data = [
  {
    img:
      "https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/1.png",
    
  },
  {
    img:
      "https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/2.png",
    
  },
  {
    img:
   "https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/3.png",
   
  },
  {
    img:
    "https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/8.png",
    
  },
  {
    img:
      "https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/5.png",
    
  },
  {
    img:
      "https://magplus-13e95.kxcdn.com/demo/magplus/foodpro/wp-content/uploads/sites/6/2017/04/7.png",
    
  },
];

const Offers = () => {
 
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <div style={{marginTop:"5%",  padding: `0 ${chevronWidth}px` ,
   }}>
      
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        leftChevron={<button>{<ArrowBackIcon/>}</button>}
        rightChevron={<button>{<ArrowForwardIcon/>}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        disableSwipe={true}
      >
        {data.map((o) => (
          <div >
              <Grid style={{marginBottom:80}}>
                  <Grid item md={1}/>
                  <Grid>
           {/* <Card 
          
           style={{backgroundColor:"whitesmoke",
           margin:3}}>
            <CardContent> */}
            <img
              src={o.img}
              style={{
                marginLeft:"24%",
                height:470,
              borderRadius:"10%"
                
              }}
            />
            <Typography variant="h4"
            style={{ textAlign: "center", color:" #33286C" }}>
              {o.faculty}
            </Typography>
            <Typography variant="h6" style={{ textAlign: "center",color:" #33286C" }}>
              {o.name}
            </Typography>
            {/* </CardContent>
            </Card> */}
            </Grid>
            <Grid item md={1}/>
            
            </Grid>
            
          </div>
          
        ))}
        
      </ItemsCarousel>
    </div>
  );
};
export default Offers;