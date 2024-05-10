import { setData } from './store/actions'
//import axios from 'axios';
import React, { useState, useEffect } from "react";
import './components/Normalize.css';
import './components/Style.css';
import { useDispatch, useSelector } from 'react-redux'
//const url = "https://jsonplaceholder.typicode.com/posts ";

function App(props) {
  const [con, setCon] = useState(1);
  const storeData = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    //alert("Приветствую!!!")
  }, []);
 
function changeCon(){
  dispatch(setData(con))
 //alert(storeData?.setpage.page)
setCon((storeData?.setpage.page)+1)

}  
  return (
    <div className="container">
  <p>{con}</p>
  <button onClick={changeCon}>новое значение</button> 
  </div>
  

  )
}


export default App