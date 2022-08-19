import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import HandleDateClick from './AddEvent.js';

const events = [
    {
        id: 1,
        title: 'event 1',
        start: '2022-08-14T10:00:00',
        end: '2022-08-14T12:00:00',
    },
    {
        id: 2,
        title: 'event 2',
        start: '2022-08-16T13:00:00',
        end: '2022-08-16T18:00:00',
    },
    { 
        id: 3, 
        title: 'event 3', 
        start: '2022-08-17', 
        end: '2022-08-20' 
    },
  ];
  
function FullCalendarApp() {
    return (
        <div className="App">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    center: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                events={events}
                eventColor="blue"
                nowIndicator
                dateClick={HandleDateClick}
                eventClick={(e) => console.log(e.event.id)}
            />
        </div>
    );
}
  
export default FullCalendarApp;
