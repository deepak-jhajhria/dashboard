import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
    const location = useLocation();
    return (
        <div className="flex justify-center w-full min-h-screen ">
            <ul className="flex flex-col items-center justify-center w-full h-full gap-5">
                <li>
                    <Link to="/" className={`${location.pathname === "/" && "webkitstrokes  after:!w-full"} font-Exo relative after:absolute after:bg-[#BD7D41]  after:bottom-[-6px] after:w-0 after:left-0 after:duration-300 after:h-[3px] text-lg leading-normal font-normal text-black mynavhover webkitstroke`}> TABS</Link>
                </li>
                <li>
                    <Link to="/accordion" className={`${location.pathname === "/accordion" && "webkitstrokes  after:!w-full"} font-Exo relative after:absolute after:bg-[#BD7D41]  after:bottom-[-6px] after:w-0 after:left-0 after:duration-300 after:h-[3px] text-lg leading-normal font-normal text-black mynavhover webkitstroke`}> ACCORDION</Link>
                </li>
                <li>
                    <Link to="/slider" className={`${location.pathname === "/slider" && "webkitstrokes  after:!w-full"} font-Exo relative after:absolute after:bg-[#BD7D41]  after:bottom-[-6px] after:w-0 after:left-0 after:duration-300 after:h-[3px] text-lg leading-normal font-normal text-black mynavhover webkitstroke`}>SLIDER </Link>
                </li>
                <li>
                    <Link to="/from" className={`${location.pathname === "/from" && "webkitstrokes  after:!w-full"} font-Exo relative after:absolute after:bg-[#BD7D41]  after:bottom-[-6px] after:w-0 after:left-0 after:duration-300 after:h-[3px] text-lg leading-normal font-normal text-black mynavhover webkitstroke`}>From</Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;