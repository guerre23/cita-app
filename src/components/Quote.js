import React from "react";

const Quote = ({setNumberRandom, setColor, numberRandom, quotes, color})=>{


     const handleButton=()=>{
        let color1=Math.floor( Math.random()*255)
        let color2=Math.floor( Math.random()*255)
        let color3=Math.floor( Math.random()*255)
        let fullColor=color1+","+color2+","+color3
        setNumberRandom( Math.floor( Math.random()*102))
        setColor(fullColor)
     }

    return(
        <>
         <div>

         <p>  {quotes[numberRandom].quote} </p>
         <p  className="autor">
              {quotes[numberRandom].author}
         </p>
         <button className="boton" onClick={handleButton} style={{background: "rgb("+color+")"}}></button>
        
         </div> 
           
        
        </>    
    )
}

export default Quote;
