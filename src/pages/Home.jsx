import {useState,useEffect} from 'react'
import List from '../components/List';
import axios from "axios"
const Home = () => {
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
    const handleClick = (id)=>{
      console.log(id)
    }
    console.log("list", list);
  return (
    <>
     <div>
            <input type="text" placeholder="Search for a Contact" style={{width:"80vw"}}/>
            
        </div>
     
    <List list={list}  handleClick={handleClick}/>
    </>
  )
}

export default Home