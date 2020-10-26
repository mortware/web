import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';
import { Link } from 'react-router-dom';

const Menu = (props) => {
    const [showMenu, setShowMenu] = useState(false)

    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)', pointerEvents: 'none' },
        enter: { opacity: 1, transform: 'translateX(0%)', pointerEvents: 'all' },
        leave: { opacity: 0, transform: 'translateX(-100%)', pointerEvents: 'none' },
    })

    return (
        <nav className={props.className}>
            <button className="text-xl px-2">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </button>

            {
                maskTransitions.map(({ item, key, props }) =>
                    item &&
                    <animated.div
                        key={key}
                        style={props}
                        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowMenu(false)}
                    >
                    </animated.div>
                )
            }

            {
                menuTransitions.map(({ item, key, props }) =>
                    item &&
                    <animated.div
                        key={key}
                        style={props}
                        className="fixed bg-white text-black top-0 left-0 w-4/5 h-full z-50 shadow p-3">
                        <div>
                            <div className="font-bold py-3">
                                mortware
                                </div>
                            <ul>
                                <li>
                                    <Link
                                        to="/"
                                        className="text-blue-500 py-3 border-t border-b block"
                                        onClick={() => setShowMenu(false)}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/resume"
                                        className="text-blue-500 py-3 border-b block"
                                        onClick={() => setShowMenu(false)}>
                                        Resume
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </animated.div>
                )
            }
        </nav>
    )
}

export default Menu;