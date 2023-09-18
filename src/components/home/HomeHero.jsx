import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function HomeHero() {
  return (
    <div className=" bg-primary-light dark:bg-primary-dark">
      <main>
        <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-16 sm:pt-60 lg:px-8 lg:pt-12">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-h1-light dark:text-h1-dark sm:text-6xl">
                    IVC Computer Science Club
                  </h1>
                  <motion.h3
                    className="flex pt-6 text-h3-light dark:text-h3-dark text-2xl sm:text-3xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <TypeAnimation
                      sequence={[
                        "A Space for Creative Ideas",
                        2000,
                        "Engaging Activities",
                        2000,
                        "Collaborative Projects",
                        2000,
                        "A Community of Tech Enthusiasts",
                        2000,
                      ]}
                      wrapper="div"
                      cursor={true}
                      repeat={Infinity}
                      style={{ fontSize: "1em" }}
                    />
                  </motion.h3>
                  <p className="relative mt-6 text-lg leading-8 text-p-light dark:text-p-dark sm:max-w-md lg:max-w-none">
                    Welcome to IVC's Computer Science Club. We aim to foster a
                    community of technology enthusiasts, provide resources for
                    learning, and work on innovative projects together. Whether
                    you're a beginner or an expert, join us in our journey of
                    exploration and creation!
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#activities"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Activities
                    </a>
                    <a
                      href="/resources"
                      className="text-sm font-semibold leading-6 text-p-light dark:text-p-dark hover:text-gray-600"
                    >
                      Resources <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
                <div className="mt-14 sm:flex justify-end gap-8 hidden  sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="/homeImages/1.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="/homeImages/2.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/homeImages/3.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="/homeImages/4.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/homeImages/5.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
                <div className="mt-14 sm:hidden justify-end gap-8 block !rounded-xl  sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <Carousel className="!rounded-xl" >
                    <div className="relative rounded-xl">
                      <img
                        src="/homeImages/1.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl  object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl  " />
                    </div>
                    <div className="relative rounded-xl">
                      <img
                        src="/homeImages/2.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl  object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl  " />
                    </div>
                    <div className="relative rounded-xl">
                      <img
                        src="/homeImages/3.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl  object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl  " />
                    </div>
                   
                    <div className="relative rounded-xl">
                      <img
                        src="/homeImages/4.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl  object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl  " />
                    </div>
                    <div className="relative rounded-xl">
                      <img
                        src="/homeImages/5.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl  object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl  " />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
