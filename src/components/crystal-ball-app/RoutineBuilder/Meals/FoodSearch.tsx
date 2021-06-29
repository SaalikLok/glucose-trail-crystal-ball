import React, { useState, useEffect } from "react";
import { foods, FoodData } from "../../../../data/foods";

const FoodSearch = () => {
  const [searchVal, setSearchVal] = useState("");
  const [searchResults, setSearchResults] = useState<FoodData[] | []>([]);

  useEffect(() => {
    const results = foods.filter((food) =>
      food.name.toLowerCase().includes(searchVal)
    );
    setSearchResults(results);
  }, [searchVal]);

  const renderSearchResults = () => {
    if(searchVal.length > 0){
      const results = searchResults.map((food, index) => {
        return <li key={index}><a>{food.name}</a></li>;
      })
      return results
    }
  }

  return (
    <div className="mx-2 my-3">
      <label>
        Search for Food
        <input
          type="text"
          className="input mb-4"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </label>

      <aside className="menu">
        <p className="menu-label">Foods</p>
        <ul className="menu-list">
          {renderSearchResults()}
        </ul>
      </aside>
    </div>
  );
};

export default FoodSearch;
