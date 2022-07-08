import {useState,useEffect} from 'react'
import List from '../components/List';
import axios from "axios"
import Details from '../components/Details';
import Search from '../components/Search';
const Home = () => {
    const [list, setList] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [item, setItem] = useState(null);
    
    useEffect(() => {
      getList();
    }, []);
    const getList = async () => {
      const res = await axios.get(
        "https://rickandmortyapi.com/api/character/?name=&page=3"
      );
      console.log(res.data, res.data.results);
      setList(res.data.results);
    };
    
    const handleClick = (item)=>{
      setItem(item)
      setModalShow(true)
    }
    useEffect(()=>{},[modalShow])
    console.log("list", list);

    const handleSearch =async (val)=>{
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${val}&page=3`
      );
      console.log(res.data.results);
      setList(res.data.results);
    }

  return (
    <>
     <Search handleSearch={handleSearch}/>
     
    {modalShow?<Details show={modalShow} onHide={() => setModalShow(false)} item={item}/>:null}
    <List list={list}  handleClick={handleClick}/>
    </>
  )
}

export default Home