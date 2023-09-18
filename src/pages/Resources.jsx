
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Readings from "../components/Readings";
import Tutorials from "../components/Tutorials";
import Organizations from "../components/Organizations";
import {motion} from 'framer-motion';

function Resources() {
    return (
        <motion.div id="resources" className="flex flex-col mx-auto max-w-screen-2xl items-center p-10 bg-primary-light dark:bg-primary-dark overflow-y-auto h-full max-h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <h1 className="text-3xl font-bold text-h1-light dark:text-p-dark mb-10">Coding Resources</h1>
            <Tab />
        </motion.div>
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
        <div className="w-full md:w-4/5 mt-6 text-p-light dark:text-p-dark">
            <div className="mb-4 space-x-4 grid grid-cols-1 md:space-x-0 md:grid md:grid-cols-3">
                {buttonsList.map((tabButton, idx) => (
                    <button
                        key={idx + 1}
                        onClick={() => toggleTab(idx + 1)}
                        className={`py-1 px-2 md:py-2 md:px-4 text-sm md:text-lg border rounded-lg transition-colors duration-200 ease-in-out 
                        ${tabState === idx + 1 ? 'bg-[#ff9617] text-[#212121]' : 'bg-[#2a2c2e] text-p-dark '}`}
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