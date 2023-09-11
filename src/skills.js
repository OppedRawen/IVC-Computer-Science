const Skills = ()=>{

    return(
        <section id="skills"className="    ">
            <div className="flex flex-col">
            <h2 className="text-3xl py-2 pb-8 text-gray-500 font-medium text-center ">Technical Skills</h2>
            <article className=" max-w-screen-lg sm: mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 text-[#cacaca]">
                <div className="leading-loose">
                    <h3 className=" font-bold text-lg md:text-xl tracking-tighter">Language</h3>
                    <p>Javascript</p>
                    <p>Python</p>
                    <p>C++</p>
                    <p>Java</p>
                    <p>TypeScript</p>
                    <p>HTML</p>
                    <p>CSS</p>
                </div>
                <div className="leading-loose">
                    <h3 className="font-bold  text-lg md:text-xl tracking-tighter">Framework/Technologies</h3>
                    <p>ReactJS</p>
                    <p>GraphQL</p>
                    <p>NodeJS</p>
                    <p>Tailwind</p>
                    <p>Bootstrap</p>
                    <p>REST APIs</p>
                    <p>Jquery</p>
                </div>
                <div className="leading-loose">
                    <h3 className=" font-bold text-lg md:text-xl tracking-tighter">Database</h3>
                    <p>MySql</p>
                    <p>MongoDB</p>
                </div>
                <div className="leading-loose">
                    <h3 className=" font-bold  text-lg md:text-xl tracking-tighter">Tools</h3>
                    <p>Github</p>
                    <p>Heroku</p>
                    <p>MongoDB Atlas</p>
                    <p>Unity</p>
                </div>
                
            </article>
            </div>
        </section>
    );

};

export default Skills;