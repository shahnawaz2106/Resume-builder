import React from "react";
import style from "../Styles/workExp.module.css";
import { Link } from "react-router-dom";



export default function WorkExp() {
  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
          <div className={style.steps}>UP NEXT : </div>
          <h1>Work Experience</h1>
          <ul className={style.list}>
            <li className={style.lit}>
                <div>
                    <div className={style.span}>
                    Gather information about your accomplishments at previous jobs to fill in this section                   
                     </div>
                </div>
            </li>
            <li className={style.lit}>
                <div>
                    <div className={style.span}>
                    Need help to fill out your work experience? Simply click to add pre-written examples unique to your industry.{" "}
                    </div>
                </div>
            </li>
            <li className={style.lit}>
                <div>
                    <div className={style.span}>
                    Be sure to include keywords from the job posting. This will make your resume more attractive to recruiters.                    </div>
                </div>
            </li>
          </ul>
          <div style={{display:'flex', justifyContent:'right'}}>
            <input id="hideTips" type="checkbox" className={style.ckbx}/>
            <label for="hideTips">Don’t show me tips pages in the future.</label>
          </div>
          <Link to="/workDetails">
              <button className={style.btn}>CONTINUE</button>
          </Link>
          <div className={style.back}>
            <Link to='/home'  className={style.link}>&lt; Back</Link>
          </div>
      </div>
      <div className={style.rightContainer}>
          <div className={style.image}>
            <img src="https://cdn1.resumenerd.com/images/tips/experience-desktop-tip.svg" alt="workexperience tip" style={{width:'100%'}}/>          
          </div>
      </div>
    </div>
  );
}
