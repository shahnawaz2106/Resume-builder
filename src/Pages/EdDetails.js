import React, { useState } from "react";
import style from "../Styles/workDetails.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setEducation } from "../actions/actions";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase-config";

export default function EdDetails() {
  const { ChangeEducation,UserR } = useSelector((state) => state);
  const [form, setForm] = useState(ChangeEducation);
  const {uid}=UserR;
  const dispatch = useDispatch();

  const Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ];
  const Year = [
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
    "2009",
    "2008",
    "2007",
    "2006",
    "2005",
    "2004",
    "2003",
    "2002",
    "2001",
    "2000",
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }
 async function handleClick() {
    dispatch(setEducation(form));
    const userDoc = doc(db, "users", uid);
    let user = await getDoc(userDoc);
    user = user.data();
    await setDoc(userDoc, { ...user, education: form });
  }
  return (
    <div styles={{ width: "100%", height: "100%" }}>
      <div className={style.container}>
        <div className={style.heading}>
          <p className={style.about}>Education</p>
          <p>Start with your most recent educational institution</p>
        </div>
        <div className={style.content}>
          <label>School Name</label>
          <input
            type="text"
            onChange={handleChange}
            name="school"
            value={form.school}
            placeholder="*Required"
          />
        </div>
        <div className={(style.content, style.company)}>
          <label>City/Town</label>
          <input
            type="text"
            onChange={handleChange}
            name="city"
            value={form.city}
            placeholder="*Required"
          />
        </div>
        <div className={style.content}>
          <label>Country</label>
          <input
            type="text"
            onChange={handleChange}
            name="country"
            value={form.country}
            placeholder="*Required"
          />
        </div>
        <div className={style.content}>
          <label>Degree</label>
          <input
            type="text"
            onChange={handleChange}
            name="degree"
            value={form.degree}
            placeholder="*Required"
          />
        </div>
        <div className={style.content}>
          <label>Graduation Date</label>
          <div style={{ display: "flex" }}>
            <select onChange={handleChange} name="month" value={form.month}>
              <option>Month</option>
              {[...Month].map((ele) => (
                <option key={ele} value={ele}>
                  {ele}
                </option>
              ))}
            </select>
            <select onChange={handleChange} name="year" value={form.year}>
              <option>Year</option>
              {[...Year].map((ele) => (
                <option key={ele} value={ele}>
                  {ele}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={(style.content, style.checkBox)}>
          <Link to="/">+ Add description or special awards</Link>
        </div>
        <div>
          <div className={(style.content, style.btn)}>
            <Link to="/skills" onClick={handleClick}>
              <button className={style.saveBtn}>SAVE & CONTINUE</button>
            </Link>
          </div>
          <div className={style.back}>
            <Link to="/education" className={style.link}>
              &lt; Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// const [form,setForm]=useState({
//   school:ChangeEducation.school,
//   degree:ChangeEducation.degree,
//   city:ChangeEducation.city,
//   country:ChangeEducation.country,
//   month:ChangeEducation.month,
//   year:ChangeEducation.year
// })
