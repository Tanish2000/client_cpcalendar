import { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import logoGif from "../images/calendar.png";
import MicrosoftImg from "../images/microsoft.png";
import ChromeImg from "../images/chrome.png";

const ExtensionModal = ({modal , setModal }) => {
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

  useEffect(() => {
    let timer = setTimeout(() => setModal(true), 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [setModal]);

  return (
    <div>
      <Modal
        show={modal}
        onHide={() => setModal(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ padding: "0" }}
      >
        <Modal.Header
          closeButton
          closeVariant="white"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgb(35, 36, 38), rgb(32, 32, 35), rgb(28, 29, 32), rgb(25, 25, 29), rgb(22, 22, 26))",
            color: "white",
          }}
        >
          <Modal.Title id="contained-modal-title-vcenter" style={{fontSize : '16px'}}>
            Try our Browser Extensions.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundImage:
              "linear-gradient(to right top, #ffffff, #fcfcfe, #f9fafd, #f6f7fc, #f2f5fb, #eff4fd, #ebf4fe, #e6f4ff, #dff6ff, #d7f9ff, #d0fcff, #ccfefa)",
          }}
        >
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex align-items-center">
              <img
                src={logoGif}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="logoImage"
              />
              <h2 className="ml-2 mx-1" style={styles.heading}>
                Cp
              </h2>
              <h2 style={styles.heading}>Calendar</h2>
            </div>
            <div className="d-flex my-2">
              <div className="mx-1">
                <a href="https://microsoftedge.microsoft.com/addons/detail/cpcalendar/iffkianaapnlkhljpldhhphoeljkljjb">
                  <Button variant="outline-secondary">
                    <img
                      src={MicrosoftImg}
                      width="25"
                      height="25"
                      className="d-inline-block align-center mx-1"
                      alt="logoImage"
                    />
                     For Edge
                  </Button>
                </a>
              </div>
              <div className="mx-1">
                <a href="https://chrome.google.com/webstore/detail/contest-calendar/haebcdjghingkcllppmokcikpjjagdii">
                  <Button variant="outline-primary">
                    <img
                      src={ChromeImg}
                      width="25"
                      height="25"
                      className="d-inline-block align-center mx-1"
                      alt="logoImage"
                    />
                    For Chrome
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ExtensionModal;
