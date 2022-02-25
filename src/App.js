import "./App.css";
import Data from "./Data";
import Card from "./Card";
import Button from "./Button";
import { useState } from "react";
function App() {
  const [mealType, setMealType] = useState("All");
  let category = ["All"];
  Data.forEach((d) => category.push(d.category));
  category = [...new Set(category)];

  return (
    <div className="App">
      <div className="bg-slate-800 w-fit mx-auto my-5 text-white rounded-lg card-5 p-2">
        {category.map((c, i) => {
          return (
            <Button
              key={i}
              c={c}
              handler={() => setMealType(c)}
              mealtype={mealType}
            />
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-screen-xl mx-auto">
        {Data.map((d) => {
          if (mealType === "All") {
            return <Card key={d.id} item={d} />;
          } else {
            return d.category === mealType && <Card key={d.id} item={d} />;
          }
        })}
      </div>
    </div>
  );
}

export default App;
