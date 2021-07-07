import Target from '../images/target.svg';


const Goal = () => {
    const styles = {
        font: {
            fontFamily: `'Nunito Sans', sans-serif`,
            fontSize: '19px'
        },
        icon: {
            height: 'auto',
            width: '45px',
            margin: '10px'
        }
    }

    return (
        <div className="shadow-lg my-4" style={{ backgroundColor: '#DEF9F8' }}>
            <div className="row d-flex p-md-5 px-2 py-4 align-items-center justify-content-center mx-0">
                <div className="col-12 text-center d-flex align-items-center justify-content-center">
                    <img src={Target} style={styles.icon} alt="goal_img" />
                    <h3><strong><u>Goal</u></strong></h3>
                </div>
                <div className="col-md-10 col-12" style={styles.font}>
                    <div className="row">
                        <div className="col-12 p-md-5 p-3">
                            <div className="text-center">
                                <span>
                                    As most of the computer science students participate in different competitive programming contests on different platforms, sometimes it's too difficult to keep track of all the upcoming contests at one place.

                                </span><br /><br />
                                <span>
                                    So, <b>CpCalendar &#60; / &#62;</b> is a place where you can find all the upcoming contests on some major platforms like Codeforces, Codechef, Leetcode. As Placements / Interships season is also coming, I am also trying to make a different platform for all the upcoming <i><ins>Hiring Challenges</ins></i> on different platforms like Hackerearth, Hackerrank, Dare2Compete, etc.
                                </span><br /><br />
                                <span>
                                    Please give it a star if you like it and contribute to the upcoming features by just forking and raising PRs or by creating issues <a href="https://github.com/Tanish2000/cpcalendar" target="_blank" rel="noreferrer">here</a> or use the shortcuts given below. <main>Happy Hacking ..</main>
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-wrap align-items-center justify-content-around mx-auto my-2">
                            <div>
                                <a className="github-button" href="https://github.com/Tanish2000/cpcalendar/fork" data-color-scheme="no-preference: dark_dimmed; light: dark_dimmed; dark: dark;" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork Tanish2000/cpcalendar on GitHub">Fork</a>
                            </div>
                            <div>
                                <a className="github-button" href="https://github.com/Tanish2000/cpcalendar" data-color-scheme="no-preference: dark_dimmed; light: dark_dimmed; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star Tanish2000/cpcalendar on GitHub">Star</a>
                            </div>
                            <div>
                                <a className="github-button" href="https://github.com/Tanish2000/cpcalendar/issues" data-color-scheme="no-preference: dark_dimmed; light: dark_dimmed; dark: dark;" data-icon="octicon-issue-opened" data-size="large" data-show-count="true" aria-label="Issue Tanish2000/cpcalendar on GitHub">Issues</a>
                            </div>
                            <div>
                                <a className="github-button" href="https://github.com/Tanish2000" data-color-scheme="no-preference: dark_dimmed; light: dark_dimmed; dark: dark;" data-size="large" data-show-count="true" aria-label="Follow @Tanish2000 on GitHub">Follow @Tanish2000</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goal;