import React from "react";
import logoGif from "../images/calendar.png";

const Header = () => {
  const styles = {
    heading: {
      fontFamily: `'New Tegomin', serif`,
      textShadow: `2px 2px 4px #dd5500`,
    },
    hashtags: {
      fontFamily: `'New Tegomin', serif`,
      textShadow: `0px 0px 1px #dd5500`,
      fontSize: "18px",
    },
    heading_mini: {
      fontSize: "12px",
    },
  };

  return (
    <div>
      <nav className="navbar navbar-light px-md-4 px-2 align-items-center justify-content-center justify-content-md-between">
        <a className="navbar-brand d-flex align-items-center" href="/">
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

        <div className="d-none d-md-block">
          <span className="navbar-text" style={styles.hashtags}>
            #CompetitiveProgramming &nbsp; #Codeforces &nbsp; #Codechef &nbsp;
            #Leetcode
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
