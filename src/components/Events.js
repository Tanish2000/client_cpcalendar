import React from 'react';
import Codechef from '../images/codechef.svg'
import Codeforces from '../images/codeforces.png'

const Events = (props) => {

    const styles = {
        icon: {
            height: 'auto',
            width: '130%'
        },
        wrapper: {
            fontFamily: `'New Tegomin', serif`,
            fontSize : '19px'
        },
    }

    const events = props.events;
    return (
        <div className="container bg-dark py-3" style={styles.wrapper}>
            <h2 className="p-4 text-center text-white" ><u>All Contests</u>({events.length})</h2>
            <div className="row align-items-center justify-content-around">
                {events.map((e) => {
                    return (
                        <div key={e._id} className="col-md-5 col-11 p-2 p-md-3 m-md-2 mt-2 shadow-lg rounded" style={{ backgroundColor: e.hex_color }}>
                            <div className="d-flex align-items-center justify-content-start row">
                                <div className="col-3">
                                    <img src={e.platform === "Codechef" ? Codechef : Codeforces} style={styles.icon} alt="event" className="px-3" />
                                </div>
                                <div className="col-9">
                                    <span className="text-white">{e.title}</span>
                                    <br />
                                    <span className="text-white h6">{e.start}</span>
                                    
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
