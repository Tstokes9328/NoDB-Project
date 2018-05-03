import React from 'react';

export default function addJedi(props){
    const text = props.text
    return (
        <button onClick={props.addjedi}>{text}</button>
    )
}