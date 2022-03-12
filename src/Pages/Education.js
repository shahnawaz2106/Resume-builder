import React from "react";
import style from "../Styles/education.module.css";
import { Link } from "react-router-dom";



export default function Education() {
  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
          <div className={style.steps}>UP NEXT : </div>
          <h1>Education</h1>
          <ul className={style.list}>
            <li >
                <div>
                    <div className={style.span}>
                        List your high school experience only if you did not go to college.                     
                    </div>
                </div>
            </li>
            <li >
                <div>
                    <div className={style.span}>
                        If you are still in school, note the expected date of graduation, your major, and the type of degree you'll be receiving.                    
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <div className={style.span}>
                      Feel free to mention any honors, awards, scholarships or professional certifications or licenses you may have.
                    </div>
                </div>
            </li>
          </ul>
          <div style={{display:'flex'}}>
            <input id="hideTips" type="checkbox"/>
            <label for="hideTips">Don’t show me tips pages in the future.</label>
          </div>
          <Link to="/edDetails">
              <button className={style.btn}>ENTER MY EDUCATION</button>
          </Link>
          <div className={style.back}>
            <Link to='/workDetails'  className={style.link}>&lt; Back</Link>
          </div>
      </div>
      <div className={style.rightContainer}>
          <div className={style.image}>
             <img src="https://cdn1.resumenerd.com/images/tips/education-tips.svg" alt="workexperience tip"/>
          </div>
      </div>
    </div>
  );
}
