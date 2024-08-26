import { useState } from "react";
import Icon from "./Icon";
import { animated, useSpring } from "@react-spring/web";
import { Link } from "react-router-dom";
import Profile from "./Profile";

type MenuProps = React.HTMLProps<HTMLDivElement>;

export default function Menu(props: MenuProps) {
  const [showMenu, setShowMenu] = useState(false);

  const animatedStyle = useSpring({
    left: !showMenu ? "-100%" : "0%",
    display: !showMenu ? "hidden" : "flex",
  });

  return (
    <nav className={props.className}>
      <button
        className="text-xl px-2"
        onClick={() => setShowMenu(!showMenu)}
        title="Main Menu"
      >
        <Icon icon="menu" />
      </button>

      <animated.div
        style={{ ...animatedStyle }}
        className="fixed bg-white text-black top-0 left-0 w-4/5 h-full z-50 shadow p-3"
      >
        <div>
          <div className="font-bold py-3">mortware</div>
          <ul>
            <li>
              <Link
                to="/"
                className="text-blue-500 py-3 border-t border-b block"
                onClick={() => setShowMenu(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="text-blue-500 py-3 border-b block"
                onClick={() => setShowMenu(false)}
              >
                Resume
              </Link>
            </li>
            <li>
              <Profile />
            </li>
          </ul>
        </div>
      </animated.div>
    </nav>
  );
}
