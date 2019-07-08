import React from 'react';

function ScrollButton(props){
    return(
        <div className={`scroll-button ${props.classes}`}>
        <button className="button">{props.text}</button>
        </div>
    )
}

export default ScrollButton;