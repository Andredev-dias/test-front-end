import React from 'react';
import
{Container,
} from './styles';
const ModalInfo = (props) => {
    return(
        <Container>
            <button onClick={props.close}>&#128473;</button><br></br>
            <img src={props.data.image}/>
            <h1>{props.data.name}</h1>
            <p><strong>Gender:</strong> {props.data.gender}</p>
            <p><strong>Location:</strong> {props.data.location.name}</p>
            <p><strong>Origin:</strong> {props.data.origin.name}</p>
            <p><strong>Species:</strong> {props.data.species}</p>
            <p><strong>Created:</strong> {props.data.created}</p>
        </Container>
    )
}
export default ModalInfo;