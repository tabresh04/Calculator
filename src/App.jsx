import { useState } from 'react';
import Screen from "./Screen";
import Buttons from "./Buttons";
import './App.css'

function App() {
  const [content, setcontent] = useState("");
  let onButtonClick = (event) =>{
    let val = event.target.innerText;

      if(val === 'C'){
        setcontent("");
      }else if(val === '='){
        const ans = eval(content);
        setcontent(ans);
      }else if(val === 'X'){
        
      }else{
        const newval = content + val;
        setcontent(newval);
      }
  }
  const buttons = ['C', '+', '-', 'X', '1', '2', '3', '*', '4', '5', '6', '/', '7', '8', '9', '=','0', '.', '%'];
  return (
    <>
      <center id="Heading">Calculator</center>
        <center>
        <div className="container">
        <Screen content={content}></Screen>
        <Buttons buttons={buttons} handle={onButtonClick}></Buttons>
        </div>
        </center>
   </>
  );
}

export default App;
