import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className=" h-screen grid grid-rows-2">
        <h1 className="h-min">David's Shop</h1>
        <Link className="justify-self-center h-min w-40" to="/shop/Armor">
          <button className=" px-2 py-1">Shop</button>
        </Link>
      </div>
    </>
  );
}
