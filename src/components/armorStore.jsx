import { armor } from "./armor";
import { Link } from "react-router-dom";
export default function Armor() {
  return (
    <div className="generalStore grid grid-cols-2 justify-center overflow-auto gap-2">
      {armor.map((item) => {
        return (
          <div className="item" key={item.id}>
            <div className="name">{item.name}</div>
            <Link to={`/Products/armor/${item.altName}`}>
              <img
                className="w-32 h-32 hover:scale-125"
                alt={item.name}
                src={item.url}
              ></img>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
