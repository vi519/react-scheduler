import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import AddEvent from "./AddEvent";
import axios from "axios";
import moment from "moment";
import timeGridPlugin from "@fullcalendar/timegrid";

import '../App.css'

function Calendar() {

  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);


  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title,

      extendedProps: {
        taskId:event.taskId,
        reservationId:event.reservationId,
        description:event.description,
        orgId:event.orgId,
        location:event.location,
        subject:event.subject,
        audioRequired:event.audioRequired,
    }
      

      
    });
  };

  async function handleEventAdd(data) {
    await axios.post("https://react-schedular.herokuapp.com/create-event", data.event);
  }

  async function handleDateSet(data) {
    console.log(data.event);
    // const response= await axios.get("http://localhost:5000/get-event?start="+moment(data.start).toISOString()+"&end="+moment(data.end).toISOString())
     const response = await axios.get("https://react-schedular.herokuapp.com/get-event");
       setEvents(response.data);
  }


 
  return (
  <>
  


<AddEvent onEventAdded={(event) => onEventAdded(event)} /> 
    
    <div className="calendar-section">


        <FullCalendar


          events={events}
          ref={calendarRef}
          plugins={[timeGridPlugin]}
          initialView="timeGridDay"
          eventAdd={(event) => handleEventAdd(event)}
          eventDisplay="auto"
          datesSet={(date) => handleDateSet(date)}
   

 />
          
          {/* */}
          

        </div>
          </>


  );
}

export default Calendar;
