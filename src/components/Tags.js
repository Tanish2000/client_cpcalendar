import React from "react";
import Codechef from "../images/codechef.svg";
import Codeforces from "../images/codeforces.png";
import Leetcode from "../images/leetcode.svg";

const Tags = ({ contest }) => {
  const styles = {
    icon: {
      height: "auto",
      width: "20%",
    },
    leetcode_icon: {
      height: "40px",
      padding: "5px",
    },
  };

  const contest_count = {
    codechef: contest.filter((e) => {
      return e.platform === "Codechef";
    }).length,
    codeforces: contest.filter((e) => {
      return e.platform === "Codeforces";
    }).length,
    leetcode: contest.filter((e) => {
      return e.platform === "Leetcode";
    }).length,
  };

  return (
    <div className="d-flex align-items-center justify-content-center flex-wrap">
      <span>
        <b>
          <u>Events</u>
        </b>
        :
      </span>
      <div
        className="d-flex align-items-center justify-content-center mx-1 px-1 rounded p-md-1 my-1"
        style={{ backgroundColor: "#A0522D" }}
      >
        <img src={Codechef} alt="" style={styles.icon} />
        <h6 className="text-light mt-2 px-1">Codechef</h6>
        <span className="text-light">({contest_count.codechef})</span>
      </div>
      <div className="bg-dark d-flex align-items-center justify-content-center mx-1 px-1 rounded p-md-1 my-1">
        <img src={Codeforces} alt="" />
        <h6 className="text-light mt-2 px-1">Codeforces</h6>
        <span className="text-light">({contest_count.codeforces})</span>
      </div>
      <div
        className="d-flex align-items-center justify-content-center mx-1 px-1 rounded p-md-1 my-1"
        style={{ backgroundColor: "#edaf05" }}
      >
        <img src={Leetcode} alt="" style={styles.leetcode_icon} />
        <h6 className="text-light mt-2 px-1">Leetcode</h6>
        <span className="text-light">({contest_count.leetcode})</span>
      </div>
    </div>
  );
};

export default Tags;
