import { useContext, useState } from "react";
import { DispatchContext, ItemContext } from "../reducer/reducer";
import { Link } from "react-router-dom";
export default function Checkout() {
  const shoppingCart = useContext(ItemContext);
  const dispatch = useContext(DispatchContext);
  const [change, setChange] = useState(false);
  function mountCost() {
    if (!shoppingCart.length) {
      return 0;
    } else {
      const price = [];
      for (const item of shoppingCart) {
        price.push(item.quantity * item.price);
      }
      if (price.length === 1) {
        return price[0];
      } else {
        return price.reduce((prev, curr) => prev + curr);
      }
    }
  }
  const price = mountCost();
  return (
    <>
      {!shoppingCart.length ? (
        <div className="grid justify-center items-center grid-rows-2">
          <svg
            fill="#000000"
            height="200px"
            width="200px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g> </g> <g> </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M401.067,145.067H358.4V102.4C358.4,45.935,312.465,0,256,0S153.6,45.935,153.6,102.4v42.667h-42.667 c-4.71,0-8.533,3.823-8.533,8.533v349.867c0,4.71,3.823,8.533,8.533,8.533h290.133c4.71,0,8.533-3.823,8.533-8.533V153.6 C409.6,148.89,405.777,145.067,401.067,145.067z M170.667,102.4c0-47.053,38.281-85.333,85.333-85.333 s85.333,38.281,85.333,85.333v42.667H170.667V102.4z M392.533,494.933H119.467v-332.8H153.6v25.6c0,4.71,3.823,8.533,8.533,8.533 c4.71,0,8.533-3.823,8.533-8.533v-25.6h170.667v25.6c0,4.71,3.823,8.533,8.533,8.533c4.71,0,8.533-3.823,8.533-8.533v-25.6h34.133 V494.933z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
          <div>No Items in cart</div>
        </div>
      ) : (
        <>
          <div className="overflow-auto h-2/3 grid gap-5">
            {shoppingCart.map((item) => {
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-3 justify-center items-center gap-2 relative"
                >
                  <img className="w-20 h-20" src={item.url}></img>
                  <div className="details">
                    <div className="text-xl">{item.name}</div>
                    <div className="flex flex-row-reverse justify-center items-start gap-5">
                      <button
                        className="w-4"
                        onClick={() => {
                          dispatch({ type: "increment", id: item.id });
                          setChange(!change);
                        }}
                      >
                        +
                      </button>
                      <div>{item.quantity}</div>
                      <button
                        className="w-4"
                        onClick={() => {
                          dispatch({
                            type: "decrement",
                            id: item.id,
                          });
                          setChange(!change);
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="items-start">{item.price}</div>
                  <button
                    className="absolute right-1 top-1 w-4"
                    title="deleteBtn"
                    onClick={() => {
                      dispatch({
                        type: "delete",
                        id: item.id,
                      });
                    }}
                  >
                    x
                  </button>
                </div>
              );
            })}
          </div>
          <div className="total">
            <div className="price text-lg">{`Total: $${price}`}</div>
            <Link to={"/shop/Armor"}>
              <button className="w-3/4">Check Out</button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
