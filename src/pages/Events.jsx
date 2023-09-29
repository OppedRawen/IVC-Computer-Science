import React,{useState,useEffect} from "react";
import { eventsMap } from "../components/fakeData";
const Events = () => {

  const [pastEvents,setPastEvents] = useState([]);
  const [upcomingEvents,setUpcomingEvents] = useState([]);

  useEffect(() => {
      const currentDate = new Date();
      const past = [];
      const upcoming = [];

      eventsMap.sort((a,b)=>new Date(b.date)- new Date(a.date));
      eventsMap.forEach(event=>{
          if(new Date(event.date) < currentDate){
              past.push(event);
          }else{
              upcoming.push(event);
          }
      });
      setPastEvents(past);
      setUpcomingEvents(upcoming);

  }, []);
    return(
      <>
      <section id="events" className="text-3xl py-2 text-gray-500 font-medium text-center ">
          <h2>Events</h2>
      </section>
      
      <section className="max-w-screen-xl m-auto md:pl-20 px-8 py-24">
          <h2 className="text-2xl mb-6 font-semibold">Upcoming Events</h2>
          {renderEvents(upcomingEvents)}
          
          <h2 className="text-2xl mt-12 mb-6 font-semibold">Past Events</h2>
          {renderEvents(pastEvents)}
      </section>
  </>
    );
};
const renderEvents = (events) => {
  return events.length ? (
    events.map(event => (
      <div key={event.id} className="event mb-8 bg-gray-100 p-6 rounded-md shadow-lg">
          <h3 className="text-xl font-bold mb-4">{event.title}</h3>
          <p className="mb-2"><strong>Description:</strong> {event.description}</p>
          <p className="mb-2"><strong>Location:</strong> {event.location}</p>
          <p className="mb-2"><strong>Date:</strong> {event.date}</p>
          <p className="mb-2"><strong>Time:</strong> {event.time}</p>
          <a href={event.slideLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">View Slides</a>
      </div>
  ))
) : (
  <h1 className="text-h1-light">No events available at the moment.</h1>
  )
};

export default Events;