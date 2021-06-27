import React from 'react';
import Codechef from '../images/codechef.svg'
import Codeforces from '../images/codeforces.png'

const Tags = () => {
    const styles = {
        icon: {
            height: 'auto',
            width: '30%'
        },
    }

    return (
        <div className="container d-flex align-items-center justify-content-center flex-wrap">
            <span><b><u>Events</u></b>:</span>
            <div className="bg-primary d-flex align-items-center justify-content-center mx-2 rounded p-md-1 my-1">
                <img src={Codechef} alt="" style={styles.icon} />
                <h6 className="text-light mt-2 px-1">Codechef</h6>
            </div>
            <div className="bg-dark d-flex align-items-center justify-content-center mx-2 rounded p-md-1 my-1">
                <img src={Codeforces} alt=""  />
                <h6 className="text-light mt-2 px-1">Codeforces</h6>
            </div>
        </div>
    )
}

export default Tags
