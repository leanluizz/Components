import React from "react";
import "../styles/App.css";
import '../styles/Grid.css';

export default function Grid (props) {
    return(
        <main className='grid'>
            {props.children}
        </main>
    )
}
