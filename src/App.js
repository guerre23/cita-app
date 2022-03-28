import { useState
 } from 'react';
import './App.css';
import QuoteBox from "./components/QuoteBox";



function App() {
  const [color, setColor] = useState("10,10,10");
  console.log(color)
  return (
    <div className="App" style={{
      color:"rgb("+color+")",
      background: "rgb("+color+")"
    }}>
     <QuoteBox setColor={setColor} color={color} />
    </div>
  );
}

export default App;