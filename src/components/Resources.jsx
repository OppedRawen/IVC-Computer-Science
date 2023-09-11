// import React from "react";
// import {IoCaretForwardOutline} from "react-icons/io5"
// const Resources = () => {
//   return (
//     <div id="resources" className="flex justify-center min-h-screen items-center ">
//         <div className="container mx-auto max-w-screen-lg py-10">

//             <h2 className="text-gray-400 font-bold text-3xl mb-10 text-center">Coding Resources</h2>

//             {/* Reading Articles Section */}
//             <div className="resource-section mb-8">
//                 <h3 className="text-[#54d5bb] font-bold text-2xl mb-4">Reading Articles</h3>
//                 <ul className="list-disc pl-5">
//                     <li><a href="https://medium.com/topic/programming" className="text-[#cacaca] hover:text-[#54d5bb]" target="_blank" rel="noreferrer">Medium Programming Articles</a></li>
//                     <li><a href="https://dev.to/" className="text-[#cacaca] hover:text-[#54d5bb]" target="_blank" rel="noreferrer">DEV Community</a></li>
//                     <li><a href="#" className="text-[#cacaca] hover:text-[#54d5bb]" target="_blank" rel="noreferrer">Another Article Source (placeholder)</a></li>
//                 </ul>
//             </div>

//             {/* Tutorials Section */}
//             <div className="resource-section mb-8">
//                 <h3 className="text-[#54d5bb] font-bold text-2xl mb-4">Tutorials</h3>
//                 <ul className="list-disc pl-5">
//                     <li><a href="https://www.w3schools.com/" className="text-[#cacaca] hover:text-[#54d5bb]" target="_blank" rel="noreferrer">W3Schools</a></li>
//                     <li><a href="https://www.tutorialspoint.com/" className="text-[#cacaca] hover:text-[#54d5bb]" target="_blank" rel="noreferrer">TutorialsPoint</a></li>
//                     <li><a href="#" className="text-[#cacaca] hover:text-[#54d5bb]" target="_blank" rel="noreferrer">Another Tutorial Source (placeholder)</a></li>
//                 </ul>
//             </div>

//             {/* Prominent Coding Websites */}
//             <div className="resource-section mb-8">
//                 <h3 className="text-[#54d5bb] font-bold text-2xl mb-4">Coding Websites</h3>
//                 <ul className="list-disc pl-5">
//                     <li><a href="https://leetcode.com/" className="text-[#cacaca] hover:text-[#54d5bb]" target="_blank" rel="noreferrer">LeetCode</a></li>
//                     <li><a href="https://www.udemy.com/" className="text-[#cacaca] hover:text-[#54d5bb]" target="_blank" rel="noreferrer">Udemy</a></li>
//                     <li><a href="https://codeforces.com/" className="text-[#cacaca] hover:text-[#54d5bb]" target="_blank" rel="noreferrer">Codeforces</a></li>
//                 </ul>
//             </div>
//         </div>
//     </div>
// )
// };

// export default Resources;
// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Readings from "./Readings";
// import Tutorials from "./Tutorials";
// import Organizations from "./Organizations";

// function Resources() {
//     return (
//         <div className="flex flex-col items-center p-10">
//             <h1 className="text-3xl font-bold text-[#cacaca] mb-10">Coding Resources</h1>
//             <Tab />
//         </div>
//     );
// }

// export default Resources;

// const buttonsList = ["Reading Articles", "Tutorials", "Coding Websites"];

// function renderButtons(toggleTab, tabState) {
//     return buttonsList.map((tabButton, idx) => {
//         return (
//             <button
//                 key={idx + 1}
//                 type="button"
//                 onClick={() => toggleTab(idx + 1)}
//                 className={`py-2 px-4 text-lg border rounded-lg transition-colors duration-200 ease-in-out 
//                 ${tabState === idx + 1 ? 'bg-teal-500 text-white' : 'bg-white text-teal-500'}`}
//             >
//                 {tabButton}
//             </button>
//         );
//     });
// }

// function Tab() {
//     const [tabState, setTab] = useState(1);

//     const toggleTab = index => {
//         setTab(index);
//     };

//     const location = useLocation();
//     useEffect(() => {
//         if (location.state && location.state.option) {
//             toggleTab(location.state.option);
//         }
//     }, [location]);

//     return (
//         <div className="w-full mt-6 text-[#cacaca]">
//             <div className="flex justify-between mb-4 space-x-4 ">{renderButtons(toggleTab, tabState)}</div>
//             <div>
//                 <div className={tabState === 1 ? 'block' : 'hidden'}>
//                     <Readings />
//                 </div>
//                 <div className={tabState === 2 ? 'block' : 'hidden'}>
//                     <Tutorials />
//                 </div>
//                 <div className={tabState === 3 ? 'block' : 'hidden'}>
//                     <Organizations />
//                 </div>
//             </div>
//         </div>
//     );
// }
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Readings from "./Readings";
import Tutorials from "./Tutorials";
import Organizations from "./Organizations";

function Resources() {
    return (
        <div id ="resources" className="flex flex-col items-center p-10 bg-[#1d1d20]">
            <h1 className="text-3xl font-bold text-[#cacaca] mb-10">Coding Resources</h1>
            <Tab />
        </div>
    );
}

export default Resources;

const buttonsList = ["Reading Articles", "Tutorials", "Coding Websites"];

function Tab() {
    const [tabState, setTab] = useState(1);
    const [activeDescription, setActiveDescription] = useState(null);

    const toggleTab = index => {
        setTab(index);
    };

    const handleDescriptionClick = (idx) => {
        if (activeDescription === idx) {
            setActiveDescription(null);
        } else {
            setActiveDescription(idx);
        }
    };

    const location = useLocation();
    useEffect(() => {
        if (location.state && location.state.option) {
            toggleTab(location.state.option);
        }
    }, [location]);

    return (
        <div className="w-full mt-6 text-[#cacaca]">
            <div className="flex justify-between mb-4 space-x-4">
                {buttonsList.map((tabButton, idx) => (
                    <button
                        key={idx + 1}
                        onClick={() => toggleTab(idx + 1)}
                        className={`py-2 px-4 text-lg border rounded-lg transition-colors duration-200 ease-in-out 
                        ${tabState === idx + 1 ? 'bg-[#ff9617] text-[#212121]' : 'bg-[#2a2c2e] text-white'}`}
                    >
                        {tabButton}
                    </button>
                ))}
            </div>
            <div>
                <div className={tabState === 1 ? 'block' : 'hidden'}>
                    <Readings onDescriptionClick={handleDescriptionClick} activeDescription={activeDescription} />
                </div>
                <div className={tabState === 2 ? 'block' : 'hidden'}>
                    <Tutorials onDescriptionClick={handleDescriptionClick} activeDescription={activeDescription} />
                </div>
                <div className={tabState === 3 ? 'block' : 'hidden'}>
                    <Organizations onDescriptionClick={handleDescriptionClick} activeDescription={activeDescription} />
                </div>
            </div>
        </div>
    );
}