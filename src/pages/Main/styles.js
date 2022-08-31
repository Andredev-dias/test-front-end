import styled, { css } from 'styled-components';

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
 color: var(--words);
:hover{
    border: 2px solid var(--primary);
    cursor: pointer;
}
`;