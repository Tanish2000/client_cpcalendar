import React from 'react';
import Rocket from '../images/rocket.svg'

const Note = () => {
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
        background : {
            color : 'brown'
        }
    }
    const notes = [
        {
            text: `Contests data get updated automatically after every 5 minutes. Please refresh the page if you can't see the changes.`
        },
        {
            text: `Please inform immediately if you encounter any bug. It's a scrapping project and needs regular maintenance.`
        },
        {
            text: `If you want to contribute please ping me on any social media platform, links are given below.`
        }
    ]
    return (
        <div className="shadow-lg my-4" style={{backgroundColor : '#C4FFFD'}}>
            <div className="row d-flex p-md-5 px-2 py-4 align-items-center justify-content-center mx-0">
                <div className="col-12 text-center">
                <h3><b>Points to remember</b></h3>
                </div>
                <div className="col-12" style={styles.text}>
                    <ul style={{ listStyleImage:  `url(${Rocket})`}}>
                        {notes.map((note,index) => {
                            return (
                                <li className="text-justify my-4" key={index}>{note.text}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Note;