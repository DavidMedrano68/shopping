import { Link } from "react-router-dom";
import { generalItems } from "./shopItems";

export default function General() {
  return (
    <div className="generalStore grid grid-cols-2 justify-center overflow-auto gap-2">
      {generalItems.map((item) => {
        return (
          <div className="item" key={item.id}>
            <div className="name">{item.name}</div>
            <Link to={`/Products/GeneralItems/${item.name}`}>
              <img className="w-32 h-32 hover:scale-125" src={item.url}></img>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
