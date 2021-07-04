import React from 'react';
import Codechef from '../images/codechef.svg'
import Codeforces from '../images/codeforces.png'
import Leetcode from '../images/leetcode.svg'

const Events = (props) => {

    const styles = {
        events : {
            margin : '0'
        },
        icon: {
            height: 'auto',
            width: '150%'
        },
        wrapper: {
            fontFamily: `'New Tegomin', serif`,
            fontSize: '19px'
        },
        titleBox: {
            paddingBottom: "8px",
            borderBottom: '1px solid white',
            borderRadius: '5%'
        },
        title: {
            fontWeight: 'bold',
        },
        time: {
            fontSize: "1.05rem"
        },
        link : {
            textDecoration : 'underline',
            color : 'white'
        }
    }

    const events = props.events;

    const handleclick = (link) => {
        window.open(link ,'_blank', 'noopener , noreferrer')
    }
    return (
        <div className="bg-dark py-3" style={styles.wrapper}>
            <h2 className="p-4 text-center text-white" ><u>All Contests</u>({events.length})</h2>
            <div className="row align-items-center justify-content-around" style={styles.events}>
                {events.map((e) => {
                    return (
                        <div key={e._id} className="col-md-5 col-11 p-3 m-md-2 m-1 shadow-lg rounded" style={{ backgroundColor: e.hex_color }}>
                            <div className="d-flex align-items-center justify-content-center row">
                                <div className="col-2">
                                    <img src={e.platform === "Codechef" ? Codechef : e.platform === "Leetcode" ? Leetcode : Codeforces} style={styles.icon} alt="event" />
                                </div>
                                <div className={e.platform === "Leetcode" ? "col-10" : "col-10 text-light"} style={e.platform === "Leetcode" ? { color: '#8B0000' } : {}}>
                                    <div className="d-flex flex-column">
                                        <div className="text-center" style={styles.titleBox}>
                                            <span style={styles.title}>{e.title}</span>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                                                <span style={{ margin: '4px' }}><u>Start</u></span>
                                                <span>{e.start}</span>
                                                <span style={styles.time}>{e.start_time}</span>
                                            </div>
                                            <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                                                <span style={{ margin: '4px' }}><u>End</u></span>
                                                <span>{e.end}</span>
                                                <span style={styles.time}>{e.end_time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-10 d-flex align-items-center justify-content-center" style={e.platform === "Leetcode" ? { color: '#8B0000' } : {color : 'white'}}>
                                    <button className="btn btn-primary m-3" onClick={()=> handleclick(e.link)}>View Contest page &#x3e;&#x3e;</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Events
