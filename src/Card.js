import React, { useState } from "react";
import {
  MdFreeBreakfast,
  MdLunchDining,
  MdOutlineDinnerDining,
  MdCake,
} from "react-icons/md";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { GiForkKnifeSpoon } from "react-icons/gi";

export default function Card({ item }) {
  const [bgCategory, setBgCategory] = useState(
    item.category === "Breakfast"
      ? "bg-black"
      : item.category === "Lunch"
      ? "bg-yellow-300"
      : item.category === "Dinner"
      ? "bg-lime-800"
      : "bg-yellow-600"
  );
  const [txtColor, setTxtColor] = useState(
    item.category === "Breakfast"
      ? "text-white"
      : item.category === "Lunch"
      ? "text-black"
      : item.category === "Dinner"
      ? "text-white"
      : "text-black"
  );

  return (
    <div key={item.id} className="bg-slate-100 p-4 rounded-lg grid-custom">
      <img src={item.img} />

      <div className="text-left my-2">
        <h1 className="font-medium text-xl md:text-2xl">{item.title}</h1>
        <div className="flex justify-between ">
          <div
            className={
              bgCategory + " " + txtColor + " " + "w-fit px-2 rounded-lg"
            }
          >
            {item.category === "Breakfast" && (
              <MdFreeBreakfast className="inline-block " />
            )}
            {item.category === "Lunch" && (
              <MdLunchDining className="inline-block " />
            )}
            {item.category === "Dinner" && (
              <GiForkKnifeSpoon className="inline-block  " />
            )}
            {item.category === "Snaks" && (
              <MdCake className="inline-block text-xl" />
            )}
            <span className="inline-block p-1 fon">{item.category}</span>
          </div>
          <div className="text-lg font-semibold">{item.price}</div>
        </div>
        <ReactReadMoreReadLess
          charLimit={100}
          readMoreText={"Read more "}
          readLessText={"Read less "}
          readMoreClassName="read-more-less--more"
          readLessClassName="read-more-less--less"
        >
          {item.desc}
        </ReactReadMoreReadLess>
      </div>
    </div>
  );
}
