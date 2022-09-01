import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const WrapBN = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Banner = styled.img`
  width: 30vw;
`;

export const WrapMap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  gap: 3rem;
  `;

export const WrapSearch = styled.div`
    width: 35%;
    height: 4.5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: var(--background);
    padding: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 999px;
`;

export const SearchInput = styled.input`
 width: 200px;
 height: auto;
 display: flex;
 flex-wrap: wrap;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 padding: 1rem;
 border-radius: 999px;
 border: none;
 background-color: var(--lightBackground);
 color: var(--words);
 ::placeholder{
 color: var(--primary);
 }
`;

export const BtnSort = styled.button`
 width: 200px;
 height: auto;
 display: flex;
 flex-wrap: wrap;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 padding: 1rem;
 border-radius: 999px;
 border: none;
 background-color: var(--lightBackground);
 color: var(--background);
:hover{
  color: var(--words);
  box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;
  transition: all 300ms ease-in-out 50ms;
  border: 1px solid var(--primary);
  cursor: pointer;
}
`;

export const WrapCard = styled.div`
 position: relative;
 display: flex;
 flex-direction: column;
 align-items: left;
 gap: 0.5rem;
 background-color: var(--background);
 padding: 1rem;
 border-radius: 20px;
 :hover{
  box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;
  transition: all 300ms ease-in-out 50ms;
}
`;

export const WrapImageCard = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 15vw;
 height: 15vw;
 overflow: hidden;
 border-radius: 20px;
`;

export const CardImage = styled.img`
width: 15vw;
border-radius: 50%;
opacity: 0.8;
:hover{
  border-radius: 20px;
  opacity: 1;
  transform: scale(1.1);
  transition: all 300ms ease-in-out 50ms;
}
`;

export const WrapQuickInfo = styled.div`
 background-color: var(--lightBackground);
 border-radius: 20px;
 padding: 1rem;
 display: flex;
 flex-direction: column;
 align-items: left;
 justify-content: left;
 gap: 0.5rem;
 h3{
  color: var(--primary);
 }
 h4{
  color: var(--words);
 }
`;

export const BtnMoreInfo = styled.button`
width: 50px;
height: 50px;
position: absolute;
bottom: 30px;
right: 30px;
border-radius: 50%;
background-color: var(--background);
border: none;
font-size: 2rem;
color: var(--lightBackground);
display: flex;
align-items: center;
justify-content: center;
padding-bottom: 0.4rem;
:hover{
  border: 1px solid var(--primary);
  color: var(--words);
  box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;
  transition: all 300ms ease-in-out 50ms;
  cursor: pointer;
}
`;
