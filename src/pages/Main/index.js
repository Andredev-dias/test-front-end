import React from 'react';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import ModalInfo from '../../components/ModalInfo';
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
 WrapCard,
 CardImage,
 WrapImageCard,
 WrapQuickInfo,
 BtnMoreInfo} from './styles';

const Main = () => {

const [caracters, setCaracters] = useState([]);
const [search, setSearch] = useState("");
const [modal, setModal] = useState();
const [page, setPage] = useState(1);



const handlePage = (
    e
  ) => {
    setPage(e.target.value)
  };

useEffect(() => {
    const local = localStorage.getItem('data');
    if(local){
        setCaracters(JSON.parse(local))
    }else{
        api.get(`/character?page=${page}`)
        .then((res) => {
            setCaracters(res.data.results);
            // localStorage.setItem('data', JSON.stringify(res.data.results));
        })
    }
}, [page]);

    return(
        <>
        {modal !== undefined && <ModalInfo data={caracters[modal]} close={() => setModal()}/>}
        <Container>
                <HeaderImage src={BannerBackground} alt="Background" />
            <WrapBN>
                <Banner src={Logo} alt="Banner"/><br/>
            </WrapBN>
            <WrapSearch>
                <SearchInput placeholder='Type a caracter name...' type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <label htmlFor="number">Type 1 to 826</label><input id='number' type="number" value={page} onChange={handlePage}/>
            </WrapSearch>
            <WrapMap>
            {caracters.map((item, index) =>
            {if(item.name.toLowerCase().includes(search.toLowerCase()))  
            return(
            <WrapCard key={item.id}>
                <WrapImageCard>
                <CardImage src={item.image} alt="Card Image"/>
                </WrapImageCard>
                <WrapQuickInfo>
                <h3>{item.name}</h3>
                <h4>{item.species}</h4>
                <h5 style={{ color: item.status === "Alive" ? "#339933" : item.status === "Dead" ? "#cc3300" :  "#ffcc00"}}>{item.status}</h5>
                </WrapQuickInfo>
                <BtnMoreInfo onClick={() => setModal(index)}>&#65291;</BtnMoreInfo>
            </WrapCard>
            )})}
            </WrapMap>
        </Container>
        </>
    )
}
export default Main;