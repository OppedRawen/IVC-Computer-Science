import React from "react";

const Introduction = () => {
    return (
        <div id="about" className="flex justify-center min-h-screen items-center">
            <div className="container mx-auto max-w-screen-lg">
                <div className="flex flex-col md:flex-row justify-center">
                    <div className="md:w-2/3 mx-6">
                        <h2 className="text-gray-400 font-bold text-2xl">About Our Club</h2>

                        <p className="text-[#cacaca] mt-4 text-[16px] leading-6">
                            Welcome to the Computer Science Club! We are a collective of motivated students eager to immerse fellow learners into the captivating realm of computer science. Our mission is to demystify programming, starting with the basics, and gradually progressing towards more advanced topics.
                        </p>
                        <p className="text-[#cacaca] mt-4 text-[16px] leading-6">
                            Our journey together will explore various programming languages, including <span className="font-bold text-[#54d5bb]">Java</span>, <span className="font-bold text-[#54d5bb]">Python</span>, <span className="font-bold text-[#54d5bb]">C++</span>, and <span className="font-bold text-[#54d5bb]">Javascript</span>. Furthermore, we'll dive into fundamental concepts such as <span className="font-bold text-[#54d5bb]">algorithms</span> and <span className="font-bold text-[#54d5bb]">data structures</span> that form the backbone of computational thinking.
                        </p>
                        <p className="text-[#cacaca] mt-4 mb-8 text-[16px] leading-6">
                            Beyond just theory, our club offers hands-on experience. We hold regular <span className="font-bold text-[#54d5bb]">coding workshops</span>, tackling challenges that will sharpen your problem-solving skills. Our collaborative projects span various domains, from game development to web applications, providing an opportunity to apply knowledge in real-world scenarios.
                        </p>
                        <p className="text-[#cacaca] mt-4 mb-8 text-[16px] leading-6">
                            And let's not forget the fun part! Every other week, we celebrate our progress and camaraderie with delightful treats like <span className="font-bold text-[#54d5bb]">pizza</span> and <span className="font-bold text-[#54d5bb]">burgers</span>. After all, what's coding without some comfort food, right?
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-center md:justify-start mt-5">
                        <img src="compsi3.jpg" className="w-100 h-60 mt-10 rounded-md" alt="compsciClubImage" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Introduction;
