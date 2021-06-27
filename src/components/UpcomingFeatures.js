import React from 'react';

const UpcomingFeatures = () => {
    const styles = {
        text: {
            fontFamily: `'Nunito Sans', sans-serif`,
            fontSize: '19px'
        },
        icon: {
            height: 'auto',
            width: '40%',
            margin : '20px auto'
        },
    }
    const UpcomingFeatures = [
        {
            id: 1,
            text: `Adding support of different platforms like Leetcode, Hackerearth, Hackerrank, etc.`
        },
        {
            id: 2,
            text: `Push notifications service for the upcoming contest on differnet platforms.`
        },
        {
            id: 3,
            text: `Sending alerts through push notifications 30 minutes prior to the contest. `
        },
    ]
    return (
        <div className="container" style={styles.text}>
            <div className="row d-flex p-md-4 px-2 pt-4 align-items-center justify-content-center">
                <div className="col-12 col-md-3 text-center py-3">
                   <h1><b>Upcoming Features</b></h1>
                </div>
                <div className="col-12 col-md-6" style={styles.text}>
                    <ul>
                        {UpcomingFeatures.map((UpcomingFeatures) => {
                            return (
                                <li className="text-justify m-1" key={UpcomingFeatures.id}>{UpcomingFeatures.text}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default UpcomingFeatures;