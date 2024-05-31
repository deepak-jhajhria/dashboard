import { Link, useLocation } from "react-router-dom";
import { navTabList } from "./common/Helper";
import logo from "../assets/image/Logo.png";
import inputImage from "../assets/image/input-image.png";
const SideBar = () => {
    const location = useLocation();
    return (
        <div className={`h-20 w-full flex flex-col justify-between sm:h-screen z-50 max-sm:fixed lg:w-[253px] sm:w-[180px] -bottom-6 left-0 transition-all duration-300  bg-white`}>
            <div>
                <img className=" max-sm:hidden sm:p-6" src={logo} alt="logo" />
                <div className=" flex max-sm:justify-between lg:w-[253px] sm:w-[180px] sm:flex-col w-full gap-5 sm:h-[calc(75vh-215px)] overflow-y-scroll">
                    {navTabList.map((value, index) => (
                        <Link key={index} to={value.link} className={`flex max-sm:px-5 items-center gap-3 py-3 text-sm font-medium tracking-wide after:absolute after:top-[50%] after:h-0 max-sm:after:h-[2px] transition-all after:bg-[#EC6707] duration-300 after:transition-all after:duration-300 after:ease-linear sm:after:w-1 max-sm:after:w-0 lg:pl-12 sm:pl-6 after:right-0 relative after:rounded-md ${location.pathname === value.link ? "text-[#EC6707] after:!top-0 max-sm:after:!w-full sm:after:!h-full bg-[#FEF8F3]" : "text-black"}`}>
                            {value.icon}
                            <span className="hidden sm:block">{value.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
            <img className=" max-sm:hidden sm:p-6" src={inputImage} alt="inputImage" />
        </div>
    );
};

export default SideBar;