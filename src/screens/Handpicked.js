import React from 'react'
import "./Handpicked.css"
export const Handpicked = () => {
    return (
        <div style={{marginTop:"10%"}}>
            <h3 className="handpicked">Handpicked recipes</h3>
            <hr className="line2"/> 
            <div style={{alignItems:"center",
        justifyContent:"center",
        display:"flex",
        marginTop:"2%"}}>
                {/* <img className="vid" src="https://cdn.dribbble.com/users/398490/screenshots/2845702/eating-right.gif"/>
                 */}
<iframe src="https://www.youtube.com/embed/tJlzIJaokVY" 
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        style={{height:390, width:900,borderWidth:"5px", borderColor:"black"}}
/>
            </div>
        </div>
    )
}
