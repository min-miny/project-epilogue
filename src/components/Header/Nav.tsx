// import { Link } from "react-router-dom";
// import { menuData } from "../../constants/menuData";

const Nav = (): React.JSX.Element => {
  return (
    <nav className="gnb">
      <ul>
        <li>
          <a>nav1</a>
        </li>
        <li>
          <a>nav2</a>
        </li>
        <li>
          <a>nav3</a>
        </li>
        {/* {menuData.map((menu, idx) => (
                    <li key={idx}><Link to={menu.path}>{menu.name}</Link></li>
                ))} */}
      </ul>
    </nav>
  );
};

export default Nav;
