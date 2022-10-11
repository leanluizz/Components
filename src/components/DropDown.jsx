import React from "react";
import "../styles/App.css";
import "../styles/Menu.css";

export default function DropdDown (props) {
    return(
    <div>
    <ul id="menu-box-list">
      <li><a href="#">{props.titleOne}</a>
        <ul className='menu-content-list'>
          <li><a href="#">{props.subtitleOne}</a></li>
          <li><a href="#">{props.subtitleTwo}</a></li>
        </ul>
      </li>
      <li><a href="#">{props.titleTwo}</a>
      <ul className='menu-content-list'>
          <li><a href="#">{props.subtitleThree}</a></li>
          <li><a href="#">{props.subtitleFour}</a></li>
        </ul>
        </li>
      <li><a href="#">{props.titleThree}</a>
      <ul className='menu-content-list'>
          <li><a href="#">{props.subtitleFive}</a></li>
          <li><a href="#">{props.subtitleSix}</a></li>
        </ul>
        </li>
    </ul>
</div>
    )
}
