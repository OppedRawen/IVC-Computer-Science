const Activities = ()=>{

    return (
        <div id="activities" className="flex justify-center min-h-screen items-center ">
            <div className="container mx-auto max-w-screen-lg">
                <h2 className="text-gray-400 font-bold text-3xl mb-6 text-center">Club Activities</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Concept Introductions */}
                    <div className="activity-card">
                        <img src="compsci4.jpg" className="w-full h-60 rounded-md" alt="conceptIntroductions" />
                        <h3 className="text-[#54d5bb] font-bold text-xl mt-4">Concept Introductions</h3>
                        <p className="text-[#cacaca] mt-2 text-[16px] leading-6">
                            Delve into the basics of computer science and programming. Every session introduces a new concept, ensuring a solid foundation.
                        </p>
                    </div>

                    {/* Coding Challenge Workshops */}
                    <div className="activity-card">
                        <img src="compsci5.jpg" className="w-full h-60 rounded-md" alt="codingChallenges" />
                        <h3 className="text-[#54d5bb] font-bold text-xl mt-4">Coding Challenge Workshops</h3>
                        <p className="text-[#cacaca] mt-2 text-[16px] leading-6">
                            Challenge yourself with hands-on coding problems. These workshops are designed to sharpen problem-solving skills.
                        </p>
                    </div>

                    {/* Team Projects Workshops */}
                    <div className="activity-card">
                        <img src="compsci6.jpg" className="w-full h-60 rounded-md" alt="teamProjects" />
                        <h3 className="text-[#54d5bb] font-bold text-xl mt-4">Team Projects Workshops</h3>
                        <p className="text-[#cacaca] mt-2 text-[16px] leading-6">
                            Collaborate on real-world projects spanning game development to web applications, applying knowledge in tangible scenarios.
                        </p>
                    </div>

                    {/* Guest Lectures */}
                    <div className="activity-card">
                        <img src="compsci7.jpg" className="w-full h-60 rounded-md" alt="guestLectures" />
                        <h3 className="text-[#54d5bb] font-bold text-xl mt-4">Guest Lectures</h3>
                        <p className="text-[#cacaca] mt-2 text-[16px] leading-6">
                            Learn from industry professionals and experienced programmers as they share insights, experiences, and best practices.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Activities;