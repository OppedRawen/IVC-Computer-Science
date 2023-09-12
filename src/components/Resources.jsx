
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
            <div className="flex flex-wrap justify-between mb-4 space-x-4">
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