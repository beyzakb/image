import "./style.css";
import Images from "./Images";
import { useState } from "react";

function App() {

  const [selectedImg,setSelectedImg] = useState(Images[0])

  return (
    <div className="App">
      <div className="container">
        <img src={selectedImg} alt="selected" className="selected" />
      </div>
      <div className="imgContainer">

        {Images.map((img,index)=>(
        <img key={index} src={img} alt="random" onClick={()=>setSelectedImg(img)}/>

        ))}
        
      </div>
    </div>
  );
}

export default App;
