import {React,useContext,useEffect,useState} from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Container, Col, Row } from "reactstrap";
import {Card} from "reactstrap"
import MyCard from "../components/MyCard";
import { MyContext } from "../Context/MyContext";

const Cats = () =>
{

const url = "https://api.pexels.com/v1/search?query=kitten&per_page=8&page=1";
const apiKey = "563492ad6f91700001000001d626efa7dbb7479f9e735f60bae06feb";   
const localurl = "https://myjson.dit.upm.es/api/bins/th2";
const[items,setItem] = useState([]);
const context = useContext(MyContext);

// const fetchPhotos = async () => {
//         const response = await Axios.get(url, {
//           headers: {
//             'Authorization': apiKey
//           }
//         });

//         //const {photos} = data;
//         console.log(response);
//         //setItem(photos);
//     }

    const fetchPhotos = async () => {
        const {data} = await Axios.get(localurl);

        const {photos} = data;
        console.log(photos);
        setItem(photos);
    }    

useEffect(()=>
{
    fetchPhotos();
},[])

return (
    
    <Container fluid>
    <h1>{context.addInCart}</h1>
    <Row>
      {items.map(item => (
        <Col md={3} key={item.id}>
          <MyCard item ={item} addInCart={context.addInCart} user={context.user}/>
        </Col>
      ))}
    </Row>
  </Container>
        
);

}


export default Cats;
