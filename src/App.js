import React from 'react'
import Header from './components/Header';
import Tags from './components/Tags';
import TimeTable from './components/TimeTable';
import Aboutme from './components/Aboutme';
import Note from './components/Note';
import UpcomingFeatures from './components/UpcomingFeatures';
import './App.css';

function App() {

  const styles = {
    main_div  : {
      backgroundColor: 'azure'
    }
  }

  
  return (
    <div style={styles.main_div}>
      <Header />
      <Tags />
      <TimeTable />
      <UpcomingFeatures />
      <Note />
      <Aboutme />
    </div>
  );
}


export default App;
