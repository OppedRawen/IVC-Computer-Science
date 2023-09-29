import React, { useState, useEffect } from "react";
import { eventsMap } from "../components/fakeData";
const Events = () => {
  const [pastEvents, setPastEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [eventsShowing, setEventsShowing] = useState("upcoming");

  useEffect(() => {
    const currentDate = new Date();
    const past = [];
    const upcoming = [];

    eventsMap.sort((a, b) => new Date(b.date) - new Date(a.date));
    eventsMap.forEach((event) => {
      if (new Date(event.date) < currentDate) {
        past.push(event);
      } else {
        upcoming.push(event);
      }
    });
    setPastEvents(past);
    setUpcomingEvents(upcoming);
  }, []);
  return (
    <>
      <section
        id="events"
        className="text-3xl py-2 text-gray-500 font-medium text-center "
      >
        {/* <h2>Events</h2> */}
      </section>
      <div className="flex gap-x-6 items-center justify-center">
        <button
          disabled={eventsShowing === "upcoming"}
          onClick={() => setEventsShowing("upcoming")}
          className={`${
            eventsShowing === "upcoming"
              ? `text-black text-3xl font-extrabold`
              : `text-gray-500 text-3xl hover:underline underline-offset-8`
          }`}
        >
          Upcoming Events
        </button>
        <button
          disabled={eventsShowing === "past"}
          onClick={() => setEventsShowing("past")}
          className={`${
            eventsShowing === "past"
              ? `text-black text-3xl font-extrabold`
              : `text-gray-500 text-3xl hover:underline underline-offset-8`
          }`}
        >
          Past Events
        </button>
      </div>

      <section className="max-w-screen-xl m-auto md:pl-20 px-8 py-14">
        {eventsShowing === "upcoming"
          ? renderEvents(upcomingEvents)
          : renderEvents(pastEvents)}
        {/* <h2 className="text-2xl mb-6 font-semibold">Upcoming Events</h2> */}
        {/* {renderEvents(upcomingEvents)} */}

        {/* <h2 className="text-2xl mt-12 mb-6 font-semibold">Past Events</h2> */}
        {/* {renderEvents(pastEvents)} */}
      </section>
    </>
  );
};
const renderEvents = (events) => {
  return events.length ? (
    events.map((event) => (
      <div
        key={event.id}
        className="event mb-8 bg-gray-100 p-6 rounded-lg shadow-md flex"
      >
        <div className="flex-1 mr-6">
          <h3 className="text-xl font-bold mb-4">{event.title}</h3>
          <p className="mb-2">
            <strong>Description:</strong> {event.description}
          </p>
          <p className="mb-2">
            <strong>Location:</strong> {event.location}
          </p>
          <p className="mb-2">
            <strong>Date:</strong> {event.date}
          </p>
          <p className="mb-2">
            <strong>Time:</strong> {event.time}
          </p>
          <a
            href={event.slideLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800"
          >
            View Slides
          </a>
        </div>
        <div>
          <img
            src={event.imageUrl}
            className="mb-4 w-80 h-60 rounded object-cover"
            alt={event.title}
          />
        </div>
      </div>
    ))
  ) : (
    <h1 className="text-h1-light">No events available at the moment.</h1>
  );
};

export default Events;
