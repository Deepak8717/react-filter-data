import React from "react";

export default function Button({ c, handler, mealtype }) {
  return (
    <>
      <button
        className={`hover:bg-emerald-200 hover:text-black px-2 mx-2 rounded cursor-pointer ${
          mealtype === c ? "bg-emerald-200 text-black" : ""
        } `}
        onClick={handler}
      >
        {c}
      </button>
    </>
  );
}
