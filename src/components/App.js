import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  //the state setter that controls display list w a default value of everything
  const [thingsToDisplay, setThingsToDisplay] = useState(TASKS)
  const [categoriesToDisplay, setCategoriesToDisplay] = useState(CATEGORIES)
  const [buttonState, setButtonState] =useState(false)

  const handleClick = e => {
    console.log(e.target)
    console.log(thingsToDisplay)
    
    setButtonState(!buttonState)
  
    if(buttonState)
    {e.target.className = 'selected'}else
    {e.target.className=''}
    // console.log(e.target.className)

  //   if(e.target.id !== thingsToDisplay.category){
  //     setThingsToDisplay(thingsToDisplay)} else{
  //       setThingsToDisplay((thingsToDisplay.filter((item)=> item.category === e.target.id))
  //   )}
  //   console.log(thingsToDisplay)  
  // }
  //I was tryna synchronize the states of the filter and the render and wtf
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categoriesToDisplay={categoriesToDisplay} 
        setCategoriesToDisplay={setCategoriesToDisplay} 
        handleClick={handleClick}
      />
      <NewTaskForm />
      <TaskList thingsToDisplay={thingsToDisplay} setThingsToDisplay={setThingsToDisplay} />
    </div>
  );
}

export default App
