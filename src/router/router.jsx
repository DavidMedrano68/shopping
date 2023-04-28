import { createHashRouter } from "react-router-dom";
import General from "../components/generalStore";
import Armor from "../components/armorStore";
import Home from "../components/home";
import Shop from "../components/shop";
import ProductPage from "../components/productPage";
import ErrorPage from "../components/errorPage";
import { armor } from "../components/armor";
import { generalItems } from "../components/shopItems";
const items = [...armor, ...generalItems];
export const root = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <Shop />,
    children: [
      {
        path: "Armor/",
        element: <Armor />,
      },

      {
        path: "General/",
        element: <General />,
      },
    ],
  },
  {
    path: "/Products/GeneralItems/Axe",
    element: <ProductPage obj={items[6]} />,
  },
  {
    path: "/Products/GeneralItems/Bowl",
    element: <ProductPage obj={items[7]} />,
  },
  {
    path: "/Products/GeneralItems/Chisel",
    element: <ProductPage obj={items[8]} />,
  },
  {
    path: "/Products/GeneralItems/Pickaxe",
    element: <ProductPage obj={items[9]} />,
  },
  {
    path: "/Products/GeneralItems/Shears",
    element: <ProductPage obj={items[10]} />,
  },
  {
    path: "/Products/GeneralItems/Spade",
    element: <ProductPage obj={items[11]} />,
  },
  {
    path: "/Products/armor/BronzeFull",
    element: <ProductPage obj={items[0]} />,
  },
  {
    path: "/Products/armor/IronFull",
    element: <ProductPage obj={items[1]} />,
  },
  {
    path: "/Products/armor/BronzePlate",
    element: <ProductPage obj={items[2]} />,
  },
  {
    path: "/Products/armor/IronPlate",
    element: <ProductPage obj={items[3]} />,
  },
  {
    path: "/Products/armor/BronzeLegs",
    element: <ProductPage obj={items[4]} />,
  },
  {
    path: "/Products/armor/IronLegs",
    element: <ProductPage obj={items[5]} />,
  },
]);
