import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import axios from 'axios';
import Events from './Events';
import { ToastContainer, toast } from 'react-toastify';
import Target from '../images/target.svg'
import 'react-toastify/dist/ReactToastify.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Tags from './Tags';
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


  const Msg = ({message}) => (
    <div className="d-flex flex-column">
      <div className="text-center d-flex align-items-center justify-content-center">
        <img src={Target} alt="" style={styles.icon} />
        <h5 className="px-2">{message.platform}</h5>
      </div>
      <div className="d-flex flex-column">
        <div className="text-center" style={styles.titleBox}>
          <span style={styles.title}>{message.title}</span>
        </div>
        <div className="row">
          <div className="col-6 d-flex flex-column justify-content-center align-items-center">
            <span style={{ margin: '4px' }}><u>Start</u></span>
            <span>{message.start}</span>
            <span style={styles.time}>{message.start_time}</span>
          </div>
          <div className="col-6 d-flex flex-column justify-content-center align-items-center">
            <span style={{ margin: '4px' }}><u>End</u></span>
            <span>{message.end}</span>
            <span style={styles.time}>{message.end_time}</span>
          </div>
        </div>
      </div>
      <div className="text-italic text-center my-2">
        <a href={message.link} rel="noreferrer" target="_blank">View Contest page &#x3e;&#x3e;</a>
      </div>
    </div>
  )


  const handleSelect = (e) => {
    toast.dark(<Msg message={e} />, {
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
        <Tags contest={props.events} />
        <Calendar
          views={['month']}
          defaultView={'month'}
          localizer={localizer}
          events={props.events}
          onSelectEvent={(e) => handleSelect(e)}
          style={styles.CalenderStyles}
          popup={true}
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

  const Spinner = () => {
    return (
      <div className="container min-vh-100 d-flex align-items-center justify-content-center flex-column">
        <div>
          <div className="spinner-grow mx-2" role="status"></div>
          <div className="spinner-grow text-primary" role="status"></div>
          <div className="spinner-grow text-danger mx-2" role="status"></div>
        </div>
        <div>
          <h6 className="py-3 spinner_text text-center">Preparing Calendar for you..</h6>
        </div>
      </div >
    )
  }

  return (
    <div>
      {fetchinprogress ? <Spinner /> : <CPCalendar events={contests} />}
    </div>
  )
}

export default TimeTable;
