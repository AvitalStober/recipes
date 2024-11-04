import React from "react";
import Button from "./Button";

function NavBar() {
  interface Links {
    text: string;
    href: string;
  }

  const arr: Array<Links> = [
    { text: "first file", href: "/pages/firstFile" },
    { text: "login", href: "/pages/login" },
    { text: "services", href: "/pages/services" },
    { text: "contact", href: "/pages/contact" },
    { text: "recipes", href: "/pages/recipes" },
  ];
  return (
    <div className="flex h-16 justify-around">
      <div className="header self-center w-[20%]">My website</div>
      <div className="flex justify-evenly w-[50%]">
        {arr.map((indx) => {
          return <Button key={indx.text} text={indx.text} href={indx.href} />;
        })}
      </div>
    </div>
  );
}

export default NavBar;
