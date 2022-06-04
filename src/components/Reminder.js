import React from 'react'
import Message_pic from '../images/message.png'


const Reminder = ({ styles, handleSubmit, email, setEmail, ack_message, handleClose , setModal }) => {
  return (
    <div className="col-md-3 col-12 p-md-4 p-4 d-flex flex-column align-items-end shadow-lg" style={styles.email_section}>
      <div style={styles.innerbox}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={Message_pic} alt="email_image" style={styles.icon_email} />
          <h2 className="text-light" style={styles.gfont}>STAY TUNED</h2>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center py-4">
          <div className="text-light text-center" style={styles.description}>
            <p>Hold On!  Stay with us, as our contests data gets updated every single hour. Please subscribe to our service and never miss a chance to win a contest.</p>
          </div>
          <div className="text-light" style={styles.description}>
            <p> ⌛ Wait for us in your inbox.</p>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center py-2">
          <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="email_input" placeholder="Your Email" required />
            <input type="submit" className="email_submit" value="Go" />
          </form>
          {ack_message.status === 200 &&
            <div className="border border-success bg-success rounded p-1 m-2">
              <span className="text-light m-1">{ack_message.message}</span>
              <button className="close_btn" onClick={handleClose}>
                <span className="text-white close_span" >&times;</span>
              </button>
            </div>
          }
          {(ack_message.status === 403 || ack_message.status === 500) &&
            <div className="border border-danger bg-danger rounded p-1 m-2">
              <span className="text-light">{ack_message.message}</span>
              <button className="close_btn" onClick={handleClose}>
                <span className="text-white close_span">&times;</span>
              </button>
            </div>
          }
        </div>
        <div className="d-flex align-items-center justify-content-center py-2">
          <button className='btn btn-outline-primary p-1 mx-1'>
            <a href="https://github.com/Tanish2000/cpcalendar" target="_blank" rel="noreferrer" className="text-light text-decoration-none">
            <i style={styles.SMIcons} className="fab fa-github m-1"></i>
              Contribute</a>
          </button>
          <button 
            className='btn btn-outline-primary p-2 my-2 text-white'
            onClick={() => setModal(true)}>
            Try out Browser Extension
          </button>
        </div>
      </div>
    </div>
  )
}

export default Reminder
