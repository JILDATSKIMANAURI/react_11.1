import React,{Fragment} from "react";
import ReactDOM from "react-dom/client";
import Listitem from "./Listitem";

function App (){
  let fruits = ["apple", "banana", "orange", "grape", "kiwi"]; 

  return(
      <Fragment>
        <div>
          <Listitem masivi ={fruits} />
        </div>
      </Fragment>
    ) 
  }   
ReactDOM.createRoot (document.getElementById("root")).render(<App />);
