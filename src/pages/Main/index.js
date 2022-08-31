import React from 'react';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import Modal from '../../components/Modal';
import BannerBackground from "../../assets/background.jpg";
import Logo from "../../assets/bn.png";
import
{Container,
 HeaderImage,
 Banner,
 WrapBN,
 WrapSearch,
 WrapMap,
 SearchInput,
 BtnSort} from './styles';

const Main = () => {

const [caracters, setCaracters] = useState([]);
const [search, setSearch] = useState("");
const [modal, setModal] = useState();
const [teste, setTeste] = useState([]);


useEffect(() => {
    const local = localStorage.getItem('data');
    if(local){
        setCaracters(JSON.parse(local))
    }else{
        api.get("/character")
        .then((res) => {
            setTeste(res.data)
            setCaracters(res.data.results);
            localStorage.setItem('data', JSON.stringify(res.data.results));
        })
    }
}, []);
console.log(teste)

    return(
        <>
        {modal !== undefined && <Modal data={caracters[modal]} close={() => setModal()}/>}
        <Container>
            <HeaderImage src={BannerBackground} alt="Background" />
            <WrapBN>
                <Banner src={Logo} alt="Banner"/><br/>
            </WrapBN>
            <WrapSearch>
            <SearchInput placeholder='Type a caracter name...' type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <BtnSort>Name Sort</BtnSort>
            <BtnSort>Species Sort</BtnSort>
            </WrapSearch>
            <WrapMap>
            {caracters.map((item, index) =>
            {if(item.name.toLowerCase().includes(search.toLowerCase()))  
            return(
            <div key={item.id} onClick={() => setModal(index)}>
                <img src={item.image} alt=""/>
                <h3>{item.name}</h3>
                <h4>{item.species}</h4>
                <h5>{item.status}</h5>
            </div>
            )})}
            </WrapMap>
        </Container>
        </>
    )
}
export default Main;