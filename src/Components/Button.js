import React from 'react';

export default function Button(props){
    const text = props.text
    return(
        <button onClick={props.method}>{text}</button>
    )
}