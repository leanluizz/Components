import React from "react";
import "../styles/App.css";
import '../styles/Grid.css';

export default function Grid (props) {
    const style = {
    display: "grid",
    "gridTemplateColumns": props.grid
    }
    
    return(
        <main className={props.class} id={props.id} style={style}>
            {props.children}
        </main>
    )
}
