import { motion } from 'framer-motion';

const Activities = () => {
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

    // This data can be extracted out for cleanliness, similar to your projects page
    const activities = [
        {
            imgSrc: "compsci4.jpg",
            title: "Concept Introductions",
            description: "Delve into the basics of computer science and programming. Every session introduces a new concept, ensuring a solid foundation."
        },
        {
            imgSrc: "compsci5.jpg",
            title: "Coding Challenge Workshops",
            description: "Challenge yourself with hands-on coding problems. These workshops are designed to sharpen problem-solving skills."
        },
        {
            imgSrc: "compsci6.jpg",
            title: "Team Projects Workshops",
            description: "Collaborate on real-world projects spanning game development to web applications, applying knowledge in tangible scenarios."
        },
        {
            imgSrc: "compsci7.jpg",
            title: "Guest Lectures",
            description: "Learn from industry professionals and experienced programmers as they share insights, experiences, and best practices."
        }
    ];

    return (
        <div id="activities" className="flex justify-center items-center ">
            <div className="container mx-auto max-w-screen-lg">
                <h2 className="text-gray-400 font-bold text-3xl mb-6 text-center">Club Activities</h2>
                <section className="max-w-screen-xl m-auto md:pl-20 px-8 py-24 sm:32">
                    <motion.div className='w-full grid md:grid-cols-2 gap-8' variants={animateProject} initial='hidden' animate='animate'>
                        {activities.map((activity, idx) => (
                            <motion.div key={idx} className="relative group activity-card" variants={animateProjectItem}>
                                <img src={activity.imgSrc} className="w-full h-60 rounded-md" alt={activity.title} />
                                <h3 className="text-[#54d5bb] font-bold text-xl mt-4">{activity.title}</h3>
                                <p className="text-[#cacaca] mt-2 text-[16px] leading-6">{activity.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default Activities;
