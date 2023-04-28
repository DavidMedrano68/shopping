import Navbar from "./navBar";
import { useState } from "react";

export default function Shop() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen grid grid-cols-3 grid-rows-6">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
