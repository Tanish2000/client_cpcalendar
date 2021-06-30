import React from 'react';
import Codechef from '../images/codechef.svg'
import Codeforces from '../images/codeforces.png'
import Leetcode from '../images/leetcode.svg'

const Events = (props) => {

    const styles = {
        icon: {
            height: 'auto',
            width: '130%'
        },
        wrapper: {
            fontFamily: `'New Tegomin', serif`,
            fontSize: '19px'
        },
    }

    const events = props.events;
    return (
        <div className="container bg-dark py-3" style={styles.wrapper}>
            <h2 className="p-4 text-center text-white" ><u>All Contests</u>({events.length})</h2>
            <div className="row align-items-center justify-content-around">
                {events.map((e) => {
                    return (
                        <div key={e._id} className="col-md-5 col-11 p-2 m-md-2 m-1 shadow-lg rounded" style={{ backgroundColor: e.hex_color }}>
                            <div className="d-flex align-items-center justify-content-start row">
                                <div className="col-3">
                                    <img src={e.platform === "Codechef" ? Codechef : e.platform === "Leetcode" ? Leetcode : Codeforces} style={styles.icon} alt="event" className="px-3" />
                                </div>
                                <div className="col-9">
                                    <span className="text-light">{e.title}</span>
                                    <br />
                                    <span className="text-light">{e.start}<br /><span>{e.platform === "Leetcode" ? e.start_time : ""}</span></span>
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
