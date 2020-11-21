import React from 'react';
import './Scroll.css';
const Scroll=(props)=>{

    return (
        // Giving a className of ScrollHidden to hide the default Scroll Bar
        <div className="scrollHidden">
            {props.children}
        </div>
    );
}
export default Scroll;