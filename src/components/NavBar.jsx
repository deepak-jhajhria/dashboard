import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navData } from "./common/Helper";
import SideBar from "./SideBar";

const NavBar = () => {
    const location = useLocation();
    const [sideBar, setsideBar] = useState(false);

    return (
        <header>
            <nav className="py-5">
                <div className="max-w-[1140px] mx-auto px-3">
                    <div className="relative z-50 flex items-center justify-between">
                        <button className={` ${sideBar ? "":""} flex duration-300 gap-1 flex-col`} onClick={() => setsideBar(!sideBar)} >
                            <span className={` ${sideBar ? "translate-x-[1px] translate-y-[8px] rotate-45 !bg-white":"bg-black"} w-5  h-[2px] block duration-300`}></span>
                            <span className={` ${sideBar ? "opacity-0":""} w-5 bg-black h-[2px] block duration-300`}></span>
                            <span className={` ${sideBar ? "translate-x-[2px] translate-y-[-3px] -rotate-45 !bg-white":"bg-black"} w-5 bg-black h-[2px] block duration-300`}></span>
                        </button>
                        <ul className="flex items-center gap-5">
                            {navData.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.pathName} className={`${location.pathname === `${item.pathName}` &&"after:!w-full"} font-Exo relative after:absolute after:bg-[#BD7D41]  after:bottom-[-6px] after:w-0 after:left-0 after:duration-300 after:h-[3px] text-lg leading-normal font-normal text-black mynavhover webkitstroke`}>{item.linkName}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            <aside
                className={`${sideBar && "!left-0"
                    } w-[400px] bg-black min-h-screen flex fixed top-0 left-[-400px] z-[3] duration-300`}
            >
                <button
                    className="absolute flex flex-col gap-1 right-5 top-5"
                    onClick={() => setsideBar(!sideBar)}
                >
                    <span
                        className={` ${sideBar && "translate-x-[1px] translate-y-[8px] rotate-45"
                            } w-10 bg-black h-[2px] block duration-300`}
                    ></span>
                    <span
                        className={` ${sideBar && "opacity-0"
                            } w-10 bg-black h-[2px] block duration-300`}
                    ></span>
                    <span
                        className={` ${sideBar && "translate-x-[2px] translate-y-[-3px] -rotate-45"
                            } w-10 bg-black h-[2px] block duration-300`}
                    ></span>
                </button>
                <SideBar />
            </aside>
            <div
                onClick={() => setsideBar(false)}
                className={`${sideBar && "!left-0"
                    } w-full min-h-screen bg-[#0c0c0c6d] -left-full inset-0 fixed z-[2]`}
            ></div>
        </header>
    );
};

export default NavBar;