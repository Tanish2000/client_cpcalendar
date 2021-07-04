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
    main_div: {
      backgroundColor: 'azure',
      margin: '0 !important',
      padding: '0 !important'
    }
  }


  return (
    <div className="container-fluid" style={styles.main_div}>
      <Header />
      <Tags />
      <TimeTable />
      <div className="d-flex row mx-0 flex-wrap align-items-center justify-content-around">
        <div className="col-12 col-xl-6">
          <UpcomingFeatures />
        </div>
        <div className="col-12 col-xl-6">
          <Note />
        </div>
      </div>
      <Aboutme />
    </div>
  );
}


export default App;
