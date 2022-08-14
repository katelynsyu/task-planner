import logo from './logo.svg';
import './App.css';
import FullCalendar from './components/FullCalendar.js'
import Box from '@mui/material/Box';
import { flexbox } from '@mui/system'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'}}>
          <div className="tasks">
            <h1>Tasks</h1>
          </div>
          <div className="calendar">
            <h1>Calendar</h1>
            <FullCalendar />
          </div>
        </Box>
      </div>
    </div>
  );
}

export default App;
