// src/pages/TeamProjectWorkshops.js
import React from 'react';

const TeamProjectWorkshops = () => {
    return (
        <div className="container mx-auto px-4 py-12 max-w-screen-lg">
            <h2 className="flex pt-4 text-h2-light dark:text-h2-dark text-2xl sm:text-3xl">Team Project Workshops</h2>
            <p  className='text-sm sm:text-lg py-5 leading-7 sm:leading-8 text-p-light dark:text-p-dark'>
                We organize two distinct project workshops, scheduled separately from our regular sessions, with exact timings yet to be decided. These workshops are not only valuable for imparting knowledge about a particular domain but also serve as an opportunity for members to brainstorm, design, and possibly deploy a project worthy of a resume mention. Instead of working on a pre-decided project, members are grouped into teams, with each team coming up with its unique idea. The project lead's role is to guide these teams and troubleshoot any issues rather than micromanaging. At the end of each project rotation, we host a presentation session where every team showcases their projects and their potential benefits to prospective clients.
            </p>
        </div>
    );
};

export default TeamProjectWorkshops;
