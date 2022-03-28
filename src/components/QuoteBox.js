 import React, { useState, useEffect} from "react";
 import Quote from "./Quote";
 

const QuoteBox = ({setColor, color}) =>{
    
     const [quotes, setQuote]= useState([]);
     const [numberRandom, setNumberRandom]= useState(0);
     
    
     useEffect(() => {
       
        fetch("quotes.json").then((response)=>{
            return response.json()
        }).then((data)=> setQuote(data))

     }, [])
     
    /*Rendeizado de objetos*/ 

    return(
        <div className="quotes">
           { quotes.length>0 && < Quote setNumberRandom={setNumberRandom}  numberRandom={numberRandom}  quotes={quotes} setColor={setColor} color={color} />}
           
        </div>
    )
}
export default QuoteBox;