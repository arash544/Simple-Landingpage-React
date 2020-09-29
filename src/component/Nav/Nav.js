import React,{useContext} from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import Button from "../Button/Button";
import { Maincontext } from "../ThemeContext/ThemeContext"

const list = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Nav = (props) => {
    const [theme,setTheme] = useContext(Maincontext)

    // const btn=useRef()

    const handleTheme=()=>{
        setTheme(!theme)
        // btn.current.title="Night"

    }
  return (
    <nav>
      <ul>
        {list.map((n, i) => {
          return (
            <li key={i}>
              <Link to={n.link}>{n.title}</Link>
             
            </li>
          );
        })}
        <Button  onClick={handleTheme} title="Mode"/>
      </ul>
    </nav>
  );
};

export default Nav;
