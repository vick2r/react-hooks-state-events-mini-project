import React from "react";
import Task from "./Task";

function TaskList({ thingsToDisplay, setThingsToDisplay }) {
  

  //event handler function for delete button click which grabs the index of the currently iterating element of the display list by the button id which is the same
  const handleClick= e => {
    const index =e.target.id

    //updating state by deleting the selected element from the array of things to display using the toSpliced method
    setThingsToDisplay(
      thingsToDisplay.toSpliced(index, 1)
    )
  }


  const iterationToRender = thingsToDisplay.map((thingsToDisplay,index) => {
    //function determining the items we need to render i.e a task component for each item on the list using .map
    //extra smarts points for using this function to give an id of index to each element so we can delete them later

    return <Task 
    //passing the list of things to display, indexes, and event handler as props to child component
      taskList={thingsToDisplay} 
      key={index} 
      handleClick={handleClick}
      index={index}
    />
  })

  return (
    <div className="tasks">
      {/* calling the function that renders our predetermined components */}
      {iterationToRender}
    </div>
  );
}

export default TaskList;
