import React from 'react';
import Avatar from '../images/avatar.jpg'
import Heart from '../images/hearts.svg'

const Aboutme = () => {
    const styles = {
        img: {
            height: 'auto',
            maxWidth: '65px',
            borderRadius: '50%',
        },
        text: {
            fontFamily: `'New Tegomin', serif`
        },
        heart: {
            height: 'auto',
            maxWidth: '30px',
        },
        SMIcons: {
            fontSize: '30px',
            color: 'white'
        }
    }
    return (
        <div className="container bg-dark mt-md-2">
            <div className="row py-2">
                <div className="col-12 col-md-4 d-flex  justify-content-center align-items-center p-1">
                    <img src={Avatar} alt="" style={styles.img} className="m-2 mx-md-3" />
                    <div>
                        <h4 className="text-white text-center" style={styles.text}>Tanish Singh Chouhan</h4>
                        <p className="text-white text-center" style={styles.text}>Geek | Web Enthusiast</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <h5 className="text-white text-center" style={styles.text}>Made with <img alt="" src={Heart} style={styles.heart} /> in India</h5>
                    </div>
                </div>
                <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center p-2">
                    <div>
                        <a href="https://www.linkedin.com/in/tanish-singh-chouhan-a78856193/" target="_blank" rel="noreferrer">
                            <i style={styles.SMIcons} className="fab fa-linkedin-in m-2"></i>
                        </a>
                        <a href="https://www.instagram.com/tanish8651/" target="_blank" rel="noreferrer">
                            <i style={styles.SMIcons} className="fab fa-instagram m-2"></i>
                        </a>
                        <a href="https://twitter.com/TANISHCHOUHAN9" target="_blank" rel="noreferrer">
                            <i style={styles.SMIcons} className="fab fa-twitter m-2"></i>
                        </a>
                        <a href="https://github.com/Tanish2000" target="_blank" rel="noreferrer">
                            <i style={styles.SMIcons} className="fab fa-github m-2"></i>
                        </a>
                        <a href="mailto:chouhantanish@gmail.com" target="_blank" rel="noreferrer">
                            <i style={styles.SMIcons} className="fas fa-envelope m-2"></i>
                        </a>
                    </div>
                    <div>
                        <span className="text-center text-light" style={styles.text}>Want to contribute , Ping me!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme
