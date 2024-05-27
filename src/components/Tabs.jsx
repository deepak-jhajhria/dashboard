import { useState } from "react";
import { experienceSecData } from "./common/Helper";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <section className="relative overflow-x-clip">
            <div className="relative z-0 bg-black sm:mx-6 sm:rounded-xl">
                <div className="container py-12 sm:py-14 md:py-16 lg:py-[77px] relative z-10">
                    <div className="relative bg-darkGrey mt-6 sm:mt-10 md:mt-[50px] p-1 sm:p-2 md:p-3 rounded-xl sm:rounded-2xl md:rounded-[22px]">
                        {experienceSecData.map((item, index) => (
                            <div key={index} className={`flex flex-col items-center justify-center ${activeTab === index ? "flex" : "hidden"}`}>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="rounded-lg h-[400px] w-[700px]" src={item.thumbnail} alt="thumbnail" />
                                    <p className="text-center text-white font-medium font-Poppins text-sm sm:text-md tracking-[5.1px]">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-start justify-center gap-2 sm:gap-3 md:gap-5 mt-4 sm:mt-8 md:mt-[50px]">
                        {experienceSecData.map((item, index) => (
                            <img key={index} onClick={() => handleTabClick(index)} className={`w-7 h-6 sm:w-10 sm:h-8 md:w-16 md:h-12 lg:w-[92px] object-cover lg:h-20 rounded-md ${activeTab === index ? "w-9 !h-8 sm:w-12 sm:h-10 md:!w-20 md:!h-16 lg:!w-[104px] lg:min-h-[93px] border border-orangeRed border-opacity-30 shadow-md" : ""}`} src={item.thumbnail} alt="" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tabs