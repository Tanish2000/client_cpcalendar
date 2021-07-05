import React from 'react';
import Rocket from '../images/rocket.svg'

const UpcomingFeatures = () => {
    const styles = {
        text: {
            fontFamily: `'Nunito Sans', sans-serif`,
            fontSize: '19px'
        },
        background : {
            color : 'black'
        },

    }
    const UpcomingFeatures = [
        {
            text: `Adding support of different platforms like Hackerearth, Hackerrank, etc.`
        },
        {
            text: `Push notifications service for the upcoming contest on differnet platforms.`
        },
        {
            text: `Sending alerts through push notifications 30 minutes prior to the contest. `
        },
    ]
    return (
        <div className="shadow-lg my-4" style={{backgroundColor : '#DEF9F8'}}>
            <div className="row d-flex p-md-5 px-2 py-4 align-items-center justify-content-center mx-0">
                <div className="col-12 text-center">
                <h3><b>Upcoming Features</b></h3>
                </div>
                <div className="col-12 text-align-center" style={styles.text}>
                    <ul style={{ listStyleImage:  `url(${Rocket})` }}>
                        {UpcomingFeatures.map((feature,index) => {
                            return (
                                <li className="text-justify my-4" key={index} style={styles.list} >{feature.text}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UpcomingFeatures;