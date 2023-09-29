import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../pages/styles/Menu.css";

const Menu = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: "English Content",
    es: "Contenido en español",
  };

  return (
    <div>
      {content[language]}
      <div className="menu">
        <h1>{language === "en" ? "Menu" : "Menú"}</h1>
        <div className="menuList">
          {MenuList.map((menuItem, key) => (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
