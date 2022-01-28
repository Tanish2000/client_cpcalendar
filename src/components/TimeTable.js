import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import Events from "./Events";
import { ToastContainer, toast } from "react-toastify";
import Target from "../images/target.svg";
import "react-toastify/dist/ReactToastify.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Tags from "./Tags";
import '../App.css';
import Reminder from "./Reminder";

const TimeTable = ({setModal}) => {
  const [contests, setContest] = useState([]);
  const [fetchingprogress, setfetchingprogress] = useState(true);
  const [email, setEmail] = useState("");
  const [ack_message, setAck_message] = useState({
    status: undefined,
    message: ""
  })

  const getBaseUrl = () => {
    //Dividing load on two servers
    //Creating two seperate servers for load balancing
    const BaseUrl01 = "https://api-cpcalendar.herokuapp.com/";
    const BaseUrl02 = "https://api-cpcalender.herokuapp.com/";

    let date =  new Date().getDate(); // Today's Date
    if(date >= 15)
      return BaseUrl02;
    else
      return BaseUrl01;
  }
  

  useEffect(() => {
    axios
      .get(getBaseUrl() + "getContestData")
      .then((res) => {
        const contests = res.data.contests;
        setContest(contests);
        setfetchingprogress(false);
      });
  }, []);


  const styles = {
    CalenderStyles: {
      height: '560px',
      width: "90%",
      margin: "5px auto",
    },
    icon: {
      height: "auto",
      width: "10%",
    },
    icon_email: {
      height: "auto",
      width: "35%",
    },
    button: {
      boxShadow: 'rgba(0,0,0,0.2) 0px 0.5px 10px 2px inset'
    },
    email_section: {
      borderTop: '0px',
      marginBottom: '-3px',
      transform: 'skewY(-3deg)',
      boxShadow: '0rem 1rem 2rem rgba(0,0,0,.175)',
      backgroundImage: 'linear-gradient(to top, #232426, #202023, #1c1d20, #19191d, #16161a)',
      overflow: 'hidden'
    },
    gfont: {
      fontFamily: `'Rampart One', cursive`,
      margin: '15px 0px',
    },
    innerbox: {
      transform: 'skewY(3deg)'
    },
    description: {
      fontFamily: `'New Tegomin', serif`,
      fontSize: '18px',
    },
    SMIcons: {
      fontSize: "25px",
      color: "white",
    }
  };

  const localizer = momentLocalizer(moment);

  const handleBgColor = (e) => {
    var style = {
      backgroundColor: e.hex_color,
    };
    return {
      style: style,
    };
  };

  const handleContestPage = (link) => {
    window.open(link, '_blank', 'noopener , noreferrer')
  }

  const Msg = ({ message }) => (
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
            <span style={{ margin: "4px" }}>
              <u>Start</u>
            </span>
            <span>{message.start}</span>
            <span style={styles.time}>{message.start_time}</span>
          </div>
          <div className="col-6 d-flex flex-column justify-content-center align-items-center">
            <span style={{ margin: "4px" }}>
              <u>End</u>
            </span>
            <span>{message.end}</span>
            <span style={styles.time}>{message.end_time}</span>
          </div>
        </div>
      </div>
      <div className="text-italic text-center my-2">
        <button className="btn btn-danger m-2" onClick={() => handleContestPage(message.link)} style={styles.button}>
          Visit Contest page
        </button>
      </div>
    </div>
  );

  const handleSelect = (e) => {
    toast.dark(<Msg message={e} />, {
      position: "bottom-center",
      autoClose: 12000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });
  };

  const handleClose = () => {
    setAck_message({ status: undefined, message: "" })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAck_message({ status: undefined, message: "" })
    const res = await fetch(getBaseUrl() + 'addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email
      })
    });

    const response = await res.json();
    setAck_message({ status: response.status, message: response.message })
    setEmail("");
    console.log(response.message)
  }


  const CPCalendar = (props) => {
    return (
      <div className="d-flex flex-column">
        <div className="d-flex row mx-0">
          <div className="col-md-9 col-12">
            <Tags contest={props.events} />
            <Calendar
              views={["month"]}
              defaultView={"month"}
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
              className="px-4 px-md-0 py-3 rounded-circle "
            />
            <h6 className="text-center p-4 text-muted">
              Tap / Click on the events in the calander for complete details.
            </h6>
          </div>
          <Reminder 
            styles={styles}
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            ack_message={ack_message}
            handleClose={handleClose}
            setModal={setModal}
          />
        </div>
        <Events events={props.events} />
      </div>
    );
  };

  const Spinner = () => {
    return (
      <div className="container min-vh-100 d-flex align-items-center justify-content-center flex-column">
        <div>
          <div className="spinner-grow mx-2" role="status"></div>
          <div className="spinner-grow text-primary" role="status"></div>
          <div className="spinner-grow text-danger mx-2" role="status"></div>
        </div>
        <div>
          <h6 className="py-3 spinner_text text-center">
            Preparing Calendar for you..
          </h6>
        </div>
      </div>
    );
  };

  return (
    <div>
      {fetchingprogress ?
        <Spinner /> :
        CPCalendar({ events: contests })}
    </div>
  );
};

export default TimeTable;