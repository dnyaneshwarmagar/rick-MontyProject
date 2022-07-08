import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {Container,Card,Image,Row} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css";
const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);
  const getList = async () => {
    const res = await axios.get(
      "https://rickandmortyapi.com/api/character/?name=rick&page=3"
    );
    console.log(res.data, res.data.results);
    setList(res.data.results);
  };
  console.log("list", list);
  return (
    <Container>
        <Row>
            <input type="text" placeholder="Search for a Contact" style={{width:"80vw"}}/>
            
        </Row>
      <div>
        {list?.map((item) => (
            <Card style={{height:"10vh", margin:"3vh"}}>
            <Card.Body style={{display:"flex",flexDirection:"row",alignItems:"center"}} >
              
               
              <Image src={item.image} roundedCircle style={{height:"6vh", width:"5vw"}}/>
              <Card.Text style={{marginLeft:"1vw",width:"30vw"}}>{item.name}</Card.Text>
          

            
              <Card.Text style={{marginInlineStart:"20vw",width:"30vw"}}>{item.status}{"-"}{item.species}</Card.Text>

            </Card.Body>
            {/* <Card.Img variant="bottom" src="holder.js/100px180" /> */}
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default List;
