import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import HandleDateClick from './AddEvent.js';
import { query, onSnapshot, collection, orderBy, startAt, endAt } from 'firebase/firestore';
import { fb } from "../firebase/config";

interface VisibleDates {
    start: Date;
    end: Date;
}
  
function FullCalendarApp() {
    const [data, setData] = useState<any[]>([]);
    const [range, setRange] = useState<VisibleDates>( {
        start: new Date(),
        end:new Date()
    })
    useEffect(() => {
        //mounts
        const q = query(collection(fb, 'events'), orderBy('start'), startAt(range.start), endAt(range.end)); //query to ask for data
        const unsub = onSnapshot(q, (snap) => {
            const array = snap.docs.map(doc=>{
                return {
                    id:doc.id,
                    title:doc.get('title'),
                    start:new Date(doc.get('start')),
                    allDay:doc.get('allDay')
                }
            });
            setData([...array]);
        })
        //unmounts
        return () => {unsub()}
    },[range])
    const handleDatesSet = (e) => {
        setRange({start:e.start, end: e.end})
    }
    return (
        <div className="App">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    center: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                events={data}
                eventColor="blue"
                nowIndicator
                dateClick={HandleDateClick}
                eventClick={(e) => console.log(e.event.start)}
                datesSet={handleDatesSet}
            />
        </div>
    );
}
  
export default FullCalendarApp;
