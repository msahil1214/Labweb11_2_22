import React from "react";
import Card from 'react-bootstrap/Card';

function ReactCards(props) {
  return (
    <>


      <Card className="bg-dark text-white">
      <Card.Img src={props.imgsrc} alt="avatar_img" className="circle-img" />
      <Card.ImgOverlay>
        <Card.Title>Name: {props.title}</Card.Title>
        <Card.Text>Profession: {props.name}</Card.Text>
        <Card.Text>Prone Number: {props.phone}</Card.Text>
        <Card.Text>Website: {props.email}</Card.Text>
        <form action={props.link}>
        <input type="submit" value={props.buttonheading}/>
        </form>
      </Card.ImgOverlay>

    </Card>
</>
    
  );
}
export default ReactCards;