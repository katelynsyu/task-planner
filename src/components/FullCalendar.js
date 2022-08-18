import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

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
                    center: 'dayGridMonth,timeGridWeek,timeGridDay new',
                }}
                customButtons={{
                    new: {
                    text: 'new',
                    click: () => {
                        var dateStr = prompt('Enter a date in YYY-MM-DD FORMAT');
                        var date = new Date(dateStr+'T000:000:00');
                        if (!isNaN(date.valueOf())) { // valid?
                            Calendar:addEvent({
                              title: 'dynamic event',
                              start: date,
                              allDay: true
                            });
                            alert('Great. Now, update your database...');
                        } else {
                          alert('Invalid date.');
                        }
                    }
                    },
                }}
                events={events}
                eventColor="blue"
                nowIndicator
                dateClick={(e) => console.log(e.dateStr)}
                eventClick={(e) => console.log(e.event.id)}
            />
        </div>
    );
}
  
export default FullCalendarApp;

// document.addEventListener('DOMContentLoaded', function() {
//     var calendarEl = document.getElementById('calendar');
  
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//       initialView: 'dayGridMonth',
//       headerToolbar: {
//         center: 'addEventButton'
//       },
//       customButtons: {
//         addEventButton: {
//           text: 'add event...',
//           click: function() {
//             var dateStr = prompt('Enter a date in YYYY-MM-DD format');
//             var date = new Date(dateStr + 'T00:00:00'); // will be in local time
  
//             if (!isNaN(date.valueOf())) { // valid?
//               calendar.addEvent({
//                 title: 'dynamic event',
//                 start: date,
//                 allDay: true
//               });
//               alert('Great. Now, update your database...');
//             } else {
//               alert('Invalid date.');
//             }
//           }
//         }
//       }
//     });
  
//     calendar.render();
//     return calendar;
// });
