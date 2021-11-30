import React from "react";
import TanishAvatar from "../images/avatar.jpg";
import VinayakAvatar from '../images/Vinayak_Avatar.jpeg';
import MuskanAvatar from '../images/Muskan_Avatar.jpeg';
import Heart from "../images/hearts.svg";
import logoGif from "../images/calendar.png";


const Aboutme = () => {
  const styles = {
    events: {
      margin: "0",
    },
    img: {
      height: "auto",
      maxWidth: "65px",
      borderRadius: "50%",
    },
    text: {
      fontFamily: `'New Tegomin', serif`,
    },
    heart: {
      height: "auto",
      maxWidth: "30px",
    },
    SMIcons: {
      fontSize: "30px",
      color: "white",
    },
    heading: {
      fontFamily: `'New Tegomin', serif`,
      textShadow: `2px 2px 4px #576b88`,
    },
  };

  const Avatars = [
    {
      src: TanishAvatar,
      profileLink: 'https://www.linkedin.com/in/tanish-singh-chouhan-a78856193/',
    },
    {
      src: VinayakAvatar,
      profileLink: 'https://www.linkedin.com/in/vinayak-sharma-b94161190/'
    },
    {
      src: MuskanAvatar,
      profileLink: 'https://www.linkedin.com/in/muskan-kushwah-a44143204/'
    },
  ]
  return (
    <div className="bg-dark mt-md-2">
      <div className="row py-2 mx-0">
        <div className="col-12 col-md-4 d-flex  justify-content-center align-items-center p-1 flex-column">
          <div>
            <h5 className="text-light">✨ Contributors ✨</h5>
          </div>
          <div className="p-1">
            {
              Avatars.map((Avatar, index) => {
                return (
                  <a href={Avatar.profileLink} target="_blank" rel="noreferrer" >
                    <img src={Avatar.src} key={index} alt="" style={styles.img} className="m-2 mx-md-3" />
                  </a>
                )

              })
            }
          </div>

          {/* <div>
            <h4 className="text-white text-center" style={styles.text}>
              Tanish Singh Chouhan
            </h4>
            <p className="text-white text-center" style={styles.text}>
              Geek | Web Enthusiast
            </p>
          </div> */}
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center my-3 m-md-0">
          <div>
            <a className="navbar-brand d-flex align-items-center text-light" href="/">
              <img
                src={logoGif}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt=""
              />
              <h1 className="ml-2 mx-1" style={styles.heading}>
                Cp
              </h1>
              <h1 style={styles.heading}>Calendar</h1>
            </a>
          </div>
          <div>
            <h5 className="text-white text-center" style={styles.text}>
              Made with <img alt="" src={Heart} style={styles.heart} /> in India
            </h5>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center p-2">
          <div>
            <a
              href="https://www.linkedin.com/in/tanish-singh-chouhan-a78856193/"
              target="_blank"
              rel="noreferrer"
            >
              <i style={styles.SMIcons} className="fab fa-linkedin-in m-2"></i>
            </a>
            <a
              href="https://www.instagram.com/tanish8651/"
              target="_blank"
              rel="noreferrer"
            >
              <i style={styles.SMIcons} className="fab fa-instagram m-2"></i>
            </a>
            <a
              href="https://twitter.com/TANISHCHOUHAN9"
              target="_blank"
              rel="noreferrer"
            >
              <i style={styles.SMIcons} className="fab fa-twitter m-2"></i>
            </a>
            <a
              href="https://github.com/Tanish2000"
              target="_blank"
              rel="noreferrer"
            >
              <i style={styles.SMIcons} className="fab fa-github m-2"></i>
            </a>
            <a
              href="mailto:chouhantanish@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i style={styles.SMIcons} className="fas fa-envelope m-2"></i>
            </a>
          </div>
          <div>
            <span className="text-center text-light" style={styles.text}>
              Want to contribute , Ping me!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
