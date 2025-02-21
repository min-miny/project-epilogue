import { Link } from "react-router-dom";
// import logo from "../../assets/img/logo-bk.png";

const Logo = (): React.JSX.Element => {
  return (
    <h1 className="logo">
      로고
      <Link to="/">{/* <img src={logo} alt="에필로그 로고" /> */}</Link>
    </h1>
  );
};

export default Logo;
