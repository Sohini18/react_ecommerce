import React, { useContext } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row
} from "reactstrap";
import { MyContext } from "../Context/MyContext";

const Cart = () => {
  
    const context = useContext(MyContext);

    const allCart = context.cartItem;
    

  return (
    <Container fluid>
      
      <ListGroup>
      <h1 className="text-success text-center">Your Cart</h1>
        {allCart.map(item => (
          <ListGroupItem key={item?.id}>
            <Row className="md">
            
              <Col className="text-center">
              <img height={200} src={item.src.medium} />
                <div className="text-primary">{item?.name}</div>
                <Button color="danger" onClick={() => context.removeItem(item)}>
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* If everything is empty */}
      {context.cartItem.length >= 1 ? (
        <Card className="text-center mt-3">
          
          <CardFooter>
            <Button color="success" onClick={context.buyNow}>
              Book here
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h1 className="text-warning text-center"> Your Cart is empty</h1>
      )}
    </Container>
  );
};

export default Cart;
