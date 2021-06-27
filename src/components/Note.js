import React from 'react';
import Programmer from '../images/programmer.svg';

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
    }
    const notes = [
        {
            id: 1,
            text: `Contests data get updated automatically after every 5 minutes. Please refresh the page if you can't see the changes.`
        },
        {
            id: 2,
            text: `Please inform immediately if you encounter any bug. It's a scrapping project and needs regular maintenance.`
        },
        {
            id: 3,
            text: `If you want to contribute please ping me on any social media platform, links are given below.`
        }
    ]
    return (
        <div className="container" style={styles.text}>
            <div className="row d-flex p-md-4 px-2 py-4 align-items-center justify-content-center">
                <div className="col-12 col-md-3 text-center">
                    <img src={Programmer} alt="" style={styles.icon} />
                </div>
                <div className="col-12 col-md-6" style={styles.text}>
                    <ul>
                        {notes.map((note) => {
                            return (
                                <li className="text-justify m-1" key={note.id}>{note.text}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Note;