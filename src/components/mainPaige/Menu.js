import { NavLink} from "react-router-dom";

export default function Menu() {
  
  return (
    <div className="navbar">
      <nav className="collapse navbar-collapse">
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? "menu-item-active" : "menu-item"
          }
        >
          О нас
        </NavLink>
        <NavLink
          to="/catalog.html"
          className={({ isActive }) =>
            isActive ? "menu-item-active" : "menu-item"
          }
        >
          Как это работает
        </NavLink>
        <NavLink
          to="/about.html"
          className={({ isActive }) =>
            isActive ? "menu-item-active" : "menu-item"
          }
        >
          Отзывы
        </NavLink>
        <NavLink
          to="/contacts.html"
          className={({ isActive }) =>
            isActive ? "menu-item-active" : "menu-item"
          }
        >
          Контакты
        </NavLink>
      </nav>
    </div>
  );
}
