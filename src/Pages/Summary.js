import React from "react";
import style from "../Styles/summary.module.css";
import { Link } from "react-router-dom";

export default function Summary() {
  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
        <div className={style.steps}>UP NEXT : </div>
        <h1>Summary</h1>
        <ul className={style.list}>
          <li className={style.lit}>
            <div>
              <div className={style.span}>
                This is the most read section of your resume. Keep it succinct,
                powerful, and easy to read.
              </div>
            </div>
          </li>
          <li className={style.lit}>
            <div>
              <div className={style.span}>
                Give a brief overview of your skills and background and tie that
                in to how you would positively impact the company.
              </div>
            </div>
          </li>
          <li className={style.lit}>
            <div>
              <div className={style.span}>
                Sometimes it's best to write a custom summary that is specific
                to the job you are applying to.
              </div>
            </div>
          </li>
        </ul>
        <div style={{ display: "flex" }}>
          <input id="hideTips" type="checkbox" />
          <label for="hideTips">Don’t show me tips pages in the future.</label>
        </div>
        <Link to="/summaryDetails">
          <button className={style.btn}>ENTER MY SUMMARY</button>
        </Link>
        <div className={style.back}>
          <Link to="/skillsDetails" className={style.link}>
            &lt; Back
          </Link>
        </div>
      </div>
      <div className={style.rightContainer}>
        <div className={style.image}>
          <img
            src="https://cdn1.resumenerd.com/images/tips/summary-tips.svg"
            alt="workexperience tip"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
