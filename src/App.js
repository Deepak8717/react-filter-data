import "./App.css";
import Data from "./Data"; //meal database
import Card from "./Card"; //card component to display each meal
import Button from "./Button"; //  button compoent that display meal catefory such as "All", "Breakfast" .......
import { useState } from "react";

function App() {
  const [mealType, setMealType] = useState("All"); //Initialize mealtype with "ALL" This render All kind of meal on first load.
  let category = ["All"]; //Genrate an array of meal category and push the meal category inlcuding "All"
  Data.forEach((d) => category.push(d.category)); // ex category = ["All", "Breakfast, "Breakfast", "Lunch", "Lunch"......] notice the array has dublicate values
  category = [...new Set(category)]; //Remove dublicate and generate unqie meal category ex ["All", "Breakfast", "Lunch"........]

  return (
    <div className="App">
      <div className="bg-slate-800 w-fit mx-auto my-5 text-white rounded-lg card-5 p-2">
        {/* List  buttons with each meal category from category array that we generated above ex "All, Breakfast, Lunch ..." */}
        {category.map((c, i) => {
          return (
            <Button
              key={i}
              c={c} //each meal category is passed down to component so it can list it.
              handler={() => setMealType(c)} // each button is set with onclick function ex dinner button sets the mealType to dinner so it can render whatever mealtype is selected
              mealtype={mealType} //meal type is passdown so we can highlight the button of selected mealtype. for ex if "Breakfast" is selected "Breakfast" button is highlighted in different color
            />
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-screen-xl mx-auto">
        {/* list the meal depending on what mealtype was selected ex. Breakfast, lunch, dinner etc.  */}
        {Data.map((d) => {
          if (mealType === "All") {
            // list all meal if "All" type of meals are selected
            return <Card key={d.id} item={d} />;
          } else {
            // otherwise only list the meals of mealtype === whichever data.category(ex Breakfast, lunch, dinner) was selected
            return d.category === mealType && <Card key={d.id} item={d} />;
          }
        })}
      </div>
    </div>
  );
}

export default App;
