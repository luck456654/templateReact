import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../store/actions'
import React, { useState } from "react";
import axios from 'axios';

function Home() {
   
  const storeData = useSelector(state => state)
  const count = useSelector(state => state.count)
  const data = useSelector(state => state.data)
  const dispatch = useDispatch()

  const [dataapi, setDataAPI] = useState();
  

 function loadContent() {
    axios
      .get('https://catfact.ninja/fact')
      .then((res) => {
        setDataAPI(res)
        console.log(res)
      })
  }


function changecount(){
  dispatch(setData(storeData?.setpage.num+5, storeData?.setpage.count+1)) 
}

  return (
    <div>
      <h2>Домашняя страница</h2>
      <button onClick={changecount}>Прибавить и показать</button>
      <p>В сторе сейчас num = {storeData?.setpage.num} и count = {storeData?.setpage.count} </p>
      <button onClick={loadContent}>Загрузить данные из API и вывести их в консоль</button>      
    </div>
  );
}

export default Home;