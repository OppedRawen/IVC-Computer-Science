import React from "react";
import {motion} from 'framer-motion';
import { AiFillGithub} from "react-icons/ai";
import {FiExternalLink} from 'react-icons/fi';
const Projects = () => {
    const projects = [
      {
        title: "Urspace",
        thumbnail: 'UrSpace.png',
        description: 'A  social media application that also have a music player built in that uses Shazam API for music fetching, enabling users to discover, listen to, and save music directly within the application. ',
        technology: 'MERN / Redux / GraphQL / RapidAPI / Tailwind / Express.js',
        github: 'https://github.com/OppedRawen/urspace',
        deployed: 'https://urrspace.herokuapp.com/'
      },
        {
          title: "QuickCart Ecommerce",
          thumbnail: 'ecommerceMarketplace.png',
          description: 'A full stack ecommerce application built with an MVC design pattern and Stripe for payment integration ',
          technology: 'MySQL / Javascript / Handlebars / Tailwind / Express.js / Stripe',
          github: 'https://github.com/OppedRawen/Marketplace-application',
          deployed:'https://group-3-marketplace.herokuapp.com/'
        },
        {
          title: "MovieSearcher",
          thumbnail: 'MovieSearch.png',
          description: 'A frontend application that display movie reviews, trailers, and articles related using OMDB, youtube, and New York Times API ',
          technology: 'Javascript / Jquery / OMDB API / Youtube API / New York Times API',
          github: 'https://github.com/OppedRawen/MovieSearch',
          deployed:'https://oppedrawen.github.io/MovieSearch/'
        },{
          title: "Image Generator",
          thumbnail: 'be195c34-7f43-4f22-896b-dac5a96e8dab.png',
          description: 'A MERN stack application that utilize AI integration to generate Image ',
          technology: 'MySQL / Javascript / Handlebars / Tailwind / Express.js',
          github: 'https://github.com/OppedRawen/ImageGenerator',
          deployed:'https://imagegenerratee.herokuapp.com/'
        },
        
      ];
      
      const animateProject = {
        hidden: { opacity: 0, y: 50 },
        animate: {
            opacity: 1, 
            y: 0,
            transition: {
                delay: 0.75,
                duration: 0.4,
                type: 'tween',
                delayChildren: 0.5,
                staggerChildren: 0.4
            }
        }
      };
      const animateProjectItem = {
        hidden: { opacity: 0, y: 50 },
        animate: { 
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.2,
                type: 'tween'
            }
        }
      };
    return(
        <>
        <section id="projects" className=" text-3xl py-2 text-gray-500 font-medium text-center ">
        <h2>Projects</h2>
      </section>
      <section className=" max-w-screen-xl m-auto md:pl-20 px-8 py-24 sm:32">
<motion.div className="w-full grid md:grid-cols-2 gap-8" variants={animateProject} initial="hidden" whileInView="animate" viewport={{once:true}}>
      {projects.map((project)=>(
        <motion.div key={project.title} className=" relative group" variants={animateProjectItem} viewport={{once:true}}>

          <div className=" w-full h-max aspect-auto overflow-hidden rounded-lg opacity-90 hover:opacity-100 transition-all shadow-lg dark:shadow-gray-900 cursor-pointer">
            <img src={project.thumbnail} alt={project.title} className="w-full"></img>

            <div className=" flex rounded-lg justify-center items-center transition-all duration-700 opacity-0 bg-gradient-to-t from-[#222222] via-slate-600 to-opacity-30 group-hover:opacity-90 absolute top-0 left-0 h-full w-full">
              <div className="absolute top left-0 w-full h-full flex justify-center items-end opacity-0 hover:opacity-100">
                <div className="flex-row text-center p-6">
                  <h3 className="mb-2 font-semibold text-sky-200 text-2xl uppercase drop-shadow-md tracking-tighter">{project.title}</h3>
                  <p className="text-white text-sm tracking-tight leading-snug drop-shadow-md">
                    {project.description}
                  </p>
                  <p className="text-sky-200 text-xs py-2">
                    {project.technology}
                  </p>
                  <div className="flex flex-row justify-center align-center text-center text-5xl text-gray-600">
                    <a href={project.github}  className="mr-10">
                    <AiFillGithub />
                    </a>
                    <a href={project.deployed} className="">
                    <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          
          </div>

        </motion.div>
      ))}
      </motion.div>
      </section>
      </>
    );
};

export default Projects;