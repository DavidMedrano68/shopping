import { useReducer, createContext } from "react";
import { armor } from "../components/armor";
import { generalItems } from "../components/shopItems";
const storeItems = [...armor, ...generalItems];

export const ItemContext = createContext(null);
export const DispatchContext = createContext(null);
function itemReducer(state, action) {
  switch (action.type) {
    case "add": {
      const item = storeItems.find((item) => item.id === action.id);
      if (state.find((product) => product.id === action.id)) {
        return [...state];
      } else {
        return [...state, item];
      }
    }
    case "delete": {
      const item = storeItems.find((item) => item.id === action.id);
      const newState = state.filter((arr) => arr.id !== item.id);
      return [...newState];
    }
    case "increment": {
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
    }
    case "decrement": {
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            quantity: item.quantity === 1 ? 1 : item.quantity - 1,
          };
        } else {
          return item;
        }
      });
    }
    default:
      throw Error("oops");
  }
}
export default function ShopProvider({ children }) {
  const [items, dispatch] = useReducer(itemReducer, []);
  return (
    <ItemContext.Provider value={items}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </ItemContext.Provider>
  );
}
