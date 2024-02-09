import React from "react";

function Task({ taskList , handleClick, index }) {

  //simply rendering out stuff
  return (
    <div className="task">
      <div className="label">{taskList.category}</div>
      <div className="text">{taskList.text}</div>

      {/* here we are using the previously defined handleclick listener plus assigning the button an id of index. Smort */}
      <button className="delete" onClick={handleClick} id={index} >x</button>
    </div>
  );
}

export default Task;
