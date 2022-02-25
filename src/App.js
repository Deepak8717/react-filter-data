import "./App.css";
import Data from "./Data";
import Card from "./Card";
import { useState } from "react";
function App() {
  const [mealType, setMealType] = useState("All");

  return (
    <div className="App">
      <button
        style={{ padding: "10px", margin: "5px", cursor: "pointer" }}
        onClick={() => setMealType("All")}
      >
        All
      </button>
      <button
        style={{ padding: "10px", margin: "5px", cursor: "pointer" }}
        onClick={() => setMealType("Breakfast")}
      >
        Breakfast
      </button>
      <button
        style={{ padding: "10px", margin: "5px", cursor: "pointer" }}
        onClick={() => setMealType("Lunch")}
      >
        Lunch
      </button>
      <button
        style={{ padding: "10px", margin: "5px", cursor: "pointer" }}
        onClick={() => setMealType("Dinner")}
      >
        Dinner
      </button>
      <button
        style={{ padding: "10px", margin: "5px", cursor: "pointer" }}
        onClick={() => setMealType("Snaks")}
      >
        Snaks
      </button>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {Data.map((d) => {
          if (mealType === "All") {
            return <Card item={d} />;
          } else {
            return d.category === mealType && <Card item={d} />;
          }
        })}
      </div>
    </div>
  );
}

export default App;
