import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../store/actions'
import React, { useState } from "react";
import axios from 'axios';

function Home() {
  
  const [con, setCon] = useState(1);
  const storeData = useSelector(state => state)
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


function changeCon(){
  dispatch(setData(con)) 
setCon((storeData?.setpage.page)+1)

}
  return (
    <div>
      <h2>Домашняя страница</h2>
      <p>В сторе сейчас-{con}</p>
      <button onClick={changeCon}>Прибавить 1 к переменной в стейте и показать значение </button>
      <button onClick={loadContent}>Загрузить данные из API </button>
      <p>В сторе сейчас-{con}</p>
      <p>{dataapi?.data.fact}</p>
    </div>
  );
}

export default Home;