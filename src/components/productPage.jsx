import { useContext } from "react";
import Popup from "./popup";
import { DispatchContext } from "../reducer/reducer";
import { useState } from "react";

export default function ProductPage({ obj }) {
  const dispatch = useContext(DispatchContext);
  const [isOpen, setIsOpen] = useState(false);
  function handleBuy(id) {
    dispatch({
      type: "add",
      id: id,
    });
  }
  return (
    <div className="h-screen grid grid-cols-2 grid-rows-6">
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="grid grid-cols-2 grid-rows-6 col-span-2 row-span-6 items-center">
        <img
          src={obj.url}
          className=" justify-self-center row-span-3 h-64 w-64"
        ></img>
        <div className="h-full checkout col-span-1 row-span-6 rounded-lg border-blue-800 border-4 grid grid-rows-3">
          <div className=" self-center text-3xl text-slate-300">
            Ready to take this home?
          </div>
          <button
            className="w-3/5 justify-self-center"
            onClick={() => {
              handleBuy(obj.id);
            }}
          >
            Add To Cart
          </button>
          <button
            className="w-3/5 justify-self-center"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Checkout
          </button>
        </div>
        {obj.gif ? (
          <>
            <iframe
              src={obj.gif}
              className=" justify-self-center row-span-2 h-64 w-64"
            ></iframe>
          </>
        ) : (
          <>
            <img
              src={obj.stats}
              className=" justify-self-center row-span-2 h-64 w-64"
            ></img>
          </>
        )}
        <div className="text-lg">{obj.description}</div>
      </div>
    </div>
  );
}
