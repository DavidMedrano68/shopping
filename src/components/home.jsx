import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="">this is home page</div>
      <button className="px-2 py-1">
        <Link to="/shop/Armor">Shop</Link>
      </button>
    </>
  );
}
