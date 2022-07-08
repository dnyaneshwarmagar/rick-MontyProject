import {useState,useEffect} from 'react'
import List from '../components/List';
import axios from "axios"
import Details from '../components/Details';
import Search from '../components/Search';
const Home = () => {
    const [list, setList] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [item, setItem] = useState(null);
    const [page,setPage] = useState(1);
    const [val,setVal] = useState("")
    useEffect(() => {
      getList(val,page);
    }, []);
    
    const getList = async (val,page) => {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${val}&page=${page}`
      );
      console.log(res.data, res.data.results);
      setVal(val)
      setList(res.data.results);
    };

    const handleClick = (item)=>{
      setItem(item)
      setModalShow(true)
    }
    useEffect(()=>{},[modalShow])
    console.log("list", list);

    // useEffect(()=>{ handleInfiniteLoading(val,page)  },[page])
    // const handleInfiniteLoading =async (val,page)=>{
    //   const res = await axios.get(
    //     `https://rickandmortyapi.com/api/character/?name=${val}&page=${page}`
    //   );
    //   console.log(res.data.results);
    //   setList(prev=>[...prev,...res.data.results]);
    // }
    // window.onscroll = ()=>{
    //   if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
    //     setPage(page=>page+1)
      
    //   }
    // }
  return (
    <>
     <Search getList={getList} />
     
    {modalShow?<Details show={modalShow} onHide={() => setModalShow(false)} item={item}/>:null}
    <List list={list}  handleClick={handleClick}/>
    </>
  )
}

export default Home