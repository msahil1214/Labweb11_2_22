import React from "react";
import Card from "./components/card.jsx";
function App() {
  return (
    <div>
      <Card
        name="Web Developer"
        phone="+123 456 789"
        email="Shuja.com"
        imgsrc="https://picsum.photos/200"
        title="Shuja Akbar"
        
buttonheading="View Img"
        
        link="https://picsum.photos/200"
        
      />
      <Card
        name="Web Designer"
        phone="+987 654 321"
        email="Sahil.com"       
         imgsrc="https://picsum.photos/200"
                 title="Sahil"
buttonheading="View Img"
        
        link="https://picsum.photos/200"
        

         
  />
      <Card
        name="Backend Developer"
        phone="+918 372 574"
        email="zain.com"
        imgsrc="https://picsum.photos/200"
        title="Zain"
        buttonheading="View Img"
        link="https://picsum.photos/200"
        


        />
    </div>
  );
}

export default App;