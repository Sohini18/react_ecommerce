import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle, Button} from "reactstrap";
import { ToastContainer,toast } from "react-toastify";


const MyCard = (props) =>
{
  const cat = props.item;

  const add =(cat)=>
  {
    props.addInCart(cat);
  }

  const user= props.user;

  const check = ()=>
  {
    if(user)
    {
      {props.addInCart(cat)}
    }
    else
    toast("you are not logged in", {
      type: "error"
    });
  }

 return (

    <>
    <Card style={{ width: '18rem' }}>
  <CardBody>
    <CardImg variant="top" src={cat.src.medium} />
    <CardTitle className="text-center">{cat.name}</CardTitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </CardText>
    <div class="text-center">
    <Button color="success" style={{ marginLeft: ' .85rem' }} onClick={check}>
          Adopt me !! 
        </Button>
        </div>
  </CardBody> 
</Card>
        
        
    </>
 )

}


export default MyCard;