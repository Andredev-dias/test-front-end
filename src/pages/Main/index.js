import React from 'react';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import Modal from '../../components/Modal';

const Main = () => {

const [caracters, setCaracters] = useState([]);
const [search, setSearch] = useState("");
const [modal, setModal] = useState();

useEffect(() => {
    const local = localStorage.getItem('data');
    if(local){
        setCaracters(JSON.parse(local))
    }else{
        api.get("/character")
        .then((res) => {
            setCaracters(res.data.results);
            localStorage.setItem('data', JSON.stringify(res.data.results));
        })
    }
}, []);
console.log(caracters)
    return(
        <>
        {modal !== undefined && <Modal data={caracters[modal]} close={() => setModal()}/>}
        <div>
            <h1>Rick and Morty</h1>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <br/><br/>
            {caracters.map((item, index) =>
            {if(item.name.toLowerCase().includes(search.toLowerCase()))  
            return(
            <div key={item.id} onClick={() => setModal(index)}>
                <h3>{item.name}</h3>
                <img src={item.image} alt=""/>
                <h4>{item.species}</h4>
                <h5>{item.status}</h5>
            </div>
            )})}
        </div>
        </>
    )
}
export default Main;