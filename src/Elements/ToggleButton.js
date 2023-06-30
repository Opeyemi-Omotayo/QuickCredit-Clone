import React from "react";
import "./ToggleButton.css";

const ToggleButton = (props) => {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" onClick={props.onClick} id={props.id} checked={props.checked}/>
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleButton;
