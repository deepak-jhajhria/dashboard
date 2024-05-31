import { AlertIcon, ArrowIcon, MessageIcon } from "./common/Icons"
import avatar from "../assets/image/avatar.png"
const DashboardHeader = () => {
    return (
        <div className="flex items-center justify-between w-full gap-2 p-4 bg-white sm:px-5 sm:py-5 md:px-10 lg:px-12">
            <div className="flex flex-col">
                <h2 className="text-lg font-bold lg:leading-9 sm:text-xl lg:text-2xl">Hi Stéphane</h2>
                <p className="mt-1 text-xs text-black sm:text-sm lg:text-base">Lass uns heute den Umsatz überprüfen!</p>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
                <div className="relative flex items-center max-lg:hidden md:gap-4 after:absolute after:bg-[#F5F5F5] after:h-[80%] after:w-[1px] after:right-0">
                    <span className="cursor-pointer ">
                        <MessageIcon />
                    </span>
                    <span className="cursor-pointer ">
                        <AlertIcon />
                    </span>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                    <img className="object-contain w-12 h-12 cursor-pointer" src={avatar} alt="avatar" />
                    <div className="flex flex-col max-sm:hidden">
                        <p className="text-sm lg:text-base font-bold text-black tracking-[0.3px]">Stéphane</p>
                        <p className="text-[11px] font-normal text-black tracking-[0.3px]">Geschäftsführer</p>
                    </div>
                    <span className="max-sm:hidden">
                        <ArrowIcon />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader
