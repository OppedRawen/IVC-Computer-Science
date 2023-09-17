import { useNavigate } from "react-router-dom";



const activities = [
  {
    id: 1,
    imgSrc: "compsci4.jpg",
    title: "Concept Introductions",
    description:
      "Delve into the basics of computer science and programming. Every session introduces a new concept, ensuring a solid foundation.",
  },
  {
    id: 2,
    imgSrc: "compsci5.jpg",
    title: "Coding Challenge Workshops",
    description:
      "Challenge yourself with hands-on coding problems. These workshops are designed to sharpen problem-solving skills.",
  },
  {
    id: 3,
    imgSrc: "compsci6.jpg",
    title: "Team Projects Workshops",
    description:
      "Collaborate on real-world projects spanning game development to web applications, applying knowledge in tangible scenarios.",
  },

];

export default function HomeActivities() {
  const navigate = useNavigate();
  const navigateToActivity = (activityTitle) => {
    navigate(`/activities/${activityTitle.toLowerCase().split(" ").join("-")}`);
  };

  return (
    <div id="activities" className="bg-primary-light dark:bg-primary-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-h2-light dark:text-h2-dark sm:text-4xl">
            Our activities
          </h2>
          <p className="mt-2 text-lg leading-8 text-p-light dark:text-p-dark">
            Our mission is to get you involved, and our activities are a great way to start!
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {activities.map((activity) => (
            <article
              onClick={() => navigateToActivity(activity.title)}
              key={activity.id}
              className="flex group cursor-pointer flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  src={activity.imgSrc}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-secondary-light dark:bg-secondary-dark object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={activity.datetime} className="text-p-light dark:text-p-dark">
                    {activity.date}
                  </time>
                </div>
                <div className=" relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-h3-light dark:text-h3-dark group-hover:text-gray-600">
                    <a href={activity.href}>
                      <span className="absolute inset-0" />
                      {activity.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-p-light dark:text-p-dark">
                    {activity.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
          <div className="-mt-10 flex">
              <a
                href="/activities"
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                See all our activities{" "}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}
