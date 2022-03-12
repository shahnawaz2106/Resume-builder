import React from "react";
import style from "../Styles/skills.module.css";
import { Link } from "react-router-dom";



export default function Skills() {
  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
          <div className={style.steps}>UP NEXT : </div>
          <h1>Skills</h1>
          <ul className={style.list}>
            <li className={style.lit}>
                <div>
                    <div className={style.span}>
                    Keep your list of skills to around 8 if possible. Also, if you can, use skills listed in the job posting you are applying to.
                    </div>
                </div>
            </li>
            <li className={style.lit}>
                <div>
                    <div className={style.span}>
                    Soft skills are the most transferable from one role to the other as they are more universal
                    </div>
                </div>
            </li>
            <li className={style.lit}>
                <div>
                    <div className={style.span}>
                    Hard skills, on the other hand, are technical skills. They relate to specific roles and responsibilities.
                    </div>
                </div>
            </li>
          </ul>
          <div style={{display:'flex'}}>
            <input id="hideTips" type="checkbox"/>
            <label for="hideTips">Don’t show me tips pages in the future.</label>
          </div>
          <Link to="/skillsDetails">
              <button className={style.btn}>ENTER MY SKILLS</button>
          </Link>
          <div className={style.back}>
            <Link to='/edDetails'  className={style.link}>&lt; Back</Link>
          </div>
      </div>
      <div className={style.rightContainer}>
          <div className={style.image}>
              <img src="https://cdn1.resumenerd.com/images/tips/skills-tips.svg" alt="workexperience tip"/>
          </div>
      </div>
    </div>
  );
}
