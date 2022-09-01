import styled from 'styled-components';

export const Container = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: auto;
height: auto;
background-color: var(--background);
color: var(--primary);
padding: 2rem;
z-index: 999;
border: 2px solid var(--primary);
border-radius: 20px;
box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
button{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--lightBackground);
    border: none;
    font-size: 1.3rem;
    color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0.4rem;
    margin-left: 80%;
}
button:hover{

  border: 1px solid var(--primary);
  color: var(--words);
  box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;
  transition: all 300ms ease-in-out 50ms;
  cursor: pointer;
}
img{
   border-radius: 50%;
   border: 0.5rem solid var(--primary);
   margin-bottom: 3vh;
}
p strong{
    color: var(--words);
}
`;