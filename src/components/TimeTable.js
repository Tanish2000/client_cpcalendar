import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import axios from 'axios';
import Events from './Events';
import { ToastContainer, toast } from 'react-toastify';
import Target from '../images/target.svg'
import 'react-toastify/dist/ReactToastify.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../App.css';

const TimeTable = () => {

  const [contests, setContest] = useState([]);
  const [fetchinprogress, setfetchinprogress] = useState(true);

  useEffect(() => {
    axios.get(`https://api-cpcalendar.herokuapp.com/getContestData`)
      .then(res => {
        const contests = res.data.contests;
        setContest(contests);
        setfetchinprogress(false)
      })
  }, [])

  const styles = {
    CalenderStyles: {
      height: 550,
      width: '88%',
      margin: '10px auto'
    },
    icon: {
      height: 'auto',
      width: '10%'
    }
  }

  const localizer = momentLocalizer(moment)


  const handleBgColor = (e) => {
    var style = {
      backgroundColor: e.hex_color,
    };
    return {
      style: style
    };
  }


  const Msg = (props) => (
    <div className="d-flex flex-column">
      <div className="text-center d-flex align-items-center justify-content-center">
        <img src={Target} alt="" style={styles.icon} />
        <h5 className="px-2">{props.object.platform}</h5>
      </div>
      <div className="d-flex flex-column">
        <h6 className="text-center mt-2">Contest : {props.object.title}</h6>
        <h6 className="text-center mt-2">From : {props.object.start}</h6>
        <h6 className="text-center mt-1">To : {props.object.end}</h6>
        <h6 className="text-center mt-1">Contest Duration - {props.object.contest_duration ? props.object.contest_duration + ' Hours' : 'NA'}</h6>
      </div>
      <div className="text-italic text-center my-2">
        <a href={props.object.link} rel="noreferrer" target="_blank">Visit Contest Page</a>
      </div>
    </div>
  )


  const handleSelect = (e) => {
    toast.dark(<Msg object={e} />, {
      position: "bottom-center",
      autoClose: 12000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: 0
    });
  }

  const CPCalendar = (props) => {
    return (
      <div>
        <Calendar
          views={['month']}
          defaultView={'month'}
          localizer={localizer}
          events={props.events}
          onSelectEvent={(e) => handleSelect(e)}
          style={styles.CalenderStyles}
          popup
          eventPropGetter={(e) => handleBgColor(e)}
          className="my-4"
        />

        <ToastContainer
          position="bottom-center"
          autoClose={12000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="px-4 px-md-0 py-3"
        />
        <h6 className="text-center p-4 text-muted">Tap / Click on the events in the calander for complete details.</h6>
        <Events events={props.events} />
      </div>
    )
  }

  const Spiner = () => {
    return (
      <div className="container min-vh-100 d-flex align-items-center justify-content-center flex-row">
        <div className="spinner-grow mx-2" role="status"></div>
        <div className="spinner-grow text-primary" role="status"></div>
        <div className="spinner-grow text-danger mx-2" role="status"></div>
      </div>
    )
  }

  return (
    <div>
      {fetchinprogress ? <Spiner /> : <CPCalendar events={contests} />}
    </div>
  )
}

export default TimeTable;
