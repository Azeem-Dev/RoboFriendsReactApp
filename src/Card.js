import React from 'react';
import './Card.css';


const Card=({name,email,id})=>{
    return (
        <div className="bg-light-green br3 pa3 ma2 grow">
            <img alt="robots" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        );
}

export default Card;