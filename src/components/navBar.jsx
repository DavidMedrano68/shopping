import { Link, Outlet } from "react-router-dom";
import Popup from "./popup";

export default function Navbar({ isOpen, setIsOpen }) {
  return (
    <>
      <div
        id="sidebar"
        className="row-span-6 p-2 grid items-center justify-start"
      >
        <nav>
          <ul className="flex flex-col gap-5">
            <li>
              <Link to={`Armor`}>Armor</Link>
            </li>
            <li>
              <Link to={`General`}>General Store</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
      <div id="detail" className="col-span-2 row-span-5">
        <Outlet />
      </div>
    </>
  );
}
