import React from "react";

function CategoryFilter({ 
  categoriesToDisplay, 
  setCategoriesToDisplay, 
  handleClick,
}) {

  // console.log(categoriesToDisplay)

  const manyButtons =
    categoriesToDisplay.map((categoriesToDisplay, index) => {
      return <button key={index} id={categoriesToDisplay} onClick={handleClick} className='' >{categoriesToDisplay}</button>
  })
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {manyButtons}
    </div>
  );
}

export default CategoryFilter;
