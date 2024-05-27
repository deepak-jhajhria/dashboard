import { useState } from "react";

const Faq = () => {
    const [open, setOpen] = useState(0);
    const toggleAccordion = (index) => {
        setOpen(open === index ? true : index);
    };
    const accordionData = [
        { id: 1, title: "What is Artificial Intelligence (AI)?", content: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding." },
        { id: 2, title: "How does AI benefit our company?", content: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding." },
        { id: 3, title: "What types of AI technologies are relevant to our industry?", content: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding." },
        { id: 4, title: "How can our employees adapt to AI integration?", content: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding." },
        { id: 5, title: "How can our company ensure data security with AI?", content: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding." },
    ];
    return (
        <div id="faq" className="mt-10 sm:mt-16 md:mt-[100px] lg:mt-[150px] relative">
            <div className="container">
                <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease" className="text-center h2">Frequently <span>Asked Questions</span></h2>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease" className="text-center pTag max-w-[497px] mx-auto mt-2 sm:mt-3 md:mt-4">Lorem ipsum dolor sit amet consectetur. Orci augue mollis eu volutpat mi leo. Nibh nisl consequat metus.</p>
                <div data-aos="zoom-in" data-aos-duration="1000" className="max-w-[776px] mt-8 sm:mt-10 md:mt-[52px] mx-auto flex flex-col gap-[14px] sm:gap-[18px]">
                    {accordionData.map((item, index) => (
                        <div className={`${open === index ? "relative after:absolute after:bg-[#A854E9] after:w-full after:h-[5px] after:bottom-0 after:left-0" : " border-opacity-20"} border border-[#A854E9] rounded-md p-4 sm:p-6 overflow-hidden shadow-[0_4px_32px_0px_#00000014]`} key={item.title}>
                            <div onClick={() => toggleAccordion(index)} className={` ${open === index ? "" : ""} cursor-pointer flex items-center justify-between w-full`}>
                                <p className={`text-sm sm:text-base font-medium  font-Outfit ${open === index ? "text-black" : "text-[#4D4D4D]"}`}>{item.title}</p>
                                <span className="">{open === index ? (<span>+</span>) : (<span >-</span>)}</span>
                            </div>
                            <p className={`overflow-hidden pTag duration-500 sm:w-[92%] ${open === index ? "max-h-36 mt-2 md:mt-3" : "max-h-0"}`}>{item.content}</p>
                        </div>))
                    }
                </div>
            </div>
        </div>
    )
}

export default Faq