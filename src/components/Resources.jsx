import React from "react";
import {IoCaretForwardOutline} from "react-icons/io5"
const Resources = () => {
  return (
    <div id="resources" className="flex justify-center min-h-screen items-center ">
        <div className="container mx-auto max-w-screen-lg py-10">

            <h2 className="text-gray-400 font-bold text-3xl mb-10 text-center">Coding Resources</h2>

            {/* Reading Articles Section */}
            <div className="resource-section mb-8">
                <h3 className="text-[#54d5bb] font-bold text-2xl mb-4">Reading Articles</h3>
                <ul className="list-disc pl-5">
                    <li><a href="https://medium.com/topic/programming" className="text-[#cacaca] hover:text-[#54d5bb]" target="_blank" rel="noreferrer">Medium Programming Articles</a></li>
                    <li><a href="https://dev.to/" className="text-[#cacaca] hover:text-[#54d5bb]" target="_blank" rel="noreferrer">DEV Community</a></li>
                    <li><a href="#" className="text-[#cacaca] hover:text-[#54d5bb]" target="_blank" rel="noreferrer">Another Article Source (placeholder)</a></li>
                </ul>
            </div>

            {/* Tutorials Section */}
            <div className="resource-section mb-8">
                <h3 className="text-[#54d5bb] font-bold text-2xl mb-4">Tutorials</h3>
                <ul className="list-disc pl-5">
                    <li><a href="https://www.w3schools.com/" className="text-[#cacaca] hover:text-[#54d5bb]" target="_blank" rel="noreferrer">W3Schools</a></li>
                    <li><a href="https://www.tutorialspoint.com/" className="text-[#cacaca] hover:text-[#54d5bb]" target="_blank" rel="noreferrer">TutorialsPoint</a></li>
                    <li><a href="#" className="text-[#cacaca] hover:text-[#54d5bb]" target="_blank" rel="noreferrer">Another Tutorial Source (placeholder)</a></li>
                </ul>
            </div>

            {/* Prominent Coding Websites */}
            <div className="resource-section mb-8">
                <h3 className="text-[#54d5bb] font-bold text-2xl mb-4">Coding Websites</h3>
                <ul className="list-disc pl-5">
                    <li><a href="https://leetcode.com/" className="text-[#cacaca] hover:text-[#54d5bb]" target="_blank" rel="noreferrer">LeetCode</a></li>
                    <li><a href="https://www.udemy.com/" className="text-[#cacaca] hover:text-[#54d5bb]" target="_blank" rel="noreferrer">Udemy</a></li>
                    <li><a href="https://codeforces.com/" className="text-[#cacaca] hover:text-[#54d5bb]" target="_blank" rel="noreferrer">Codeforces</a></li>
                </ul>
            </div>
        </div>
    </div>
)
};

export default Resources;