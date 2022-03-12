import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from '../Styles/workDetails.module.css';
import ChangeWork from '../reducers/workReducer';
import { useDispatch } from 'react-redux';
import { setWork } from '../actions/actions';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

export default function WorkDetails() {
  const {ChangeWork,UserR}=useSelector((state)=>state);
  const [form,setForm]=useState(ChangeWork);
  const {uid}=UserR;
  const dispatch=useDispatch();
    const Month=[
        "January","February",
        "March","April",
        "May","June","July","August",
        "September","November","December"
    ]
    const Year=[
        '2022','2021','2020','2019','2018','2017','2016','2015',
        '2014','2013','2012','2011','2010','2009','2008','2007',
        '2006','2005','2004','2003','2002','2001','2000'
    ]

  function handleChange(e){
    const {name, value}=e.target;
    setForm({
      ...form,
      [name]:value
    })
  }
 async function handleClick(){
    dispatch(setWork(form));
    const userDoc=doc(db,'users',uid);
    let user=await getDoc(userDoc);
    user=user.data();
    await setDoc(userDoc,{...user,work:form});
  }
  return (
    <div styles={{width:"100%", height:"100%"}}>
      {/* <button onClick={handleClick}>Click</button> */}
      <div className={style.container}>
        <div className={style.heading}>
          <p className={style.about}>Work Experience</p>
          <p>Start with your most recent position</p>
        </div>
        <div className={style.content}>
          <label>Job Title</label>
          <input type='text'name='title' onChange={handleChange} value={form.title} placeholder='*Required'/>
        </div>
        <div className={style.content, style.company}>
            <label>Company</label>
            <input type='text' name='company' onChange={handleChange} value={form.company} placeholder='*Required'/>
        </div>
        <div className={style.content}>
            <label>City/Town</label>
            <input type='text' name='city' onChange={handleChange} value={form.city} placeholder='*Required'/>
        </div>
        <div className={style.content}>
          <label>Country</label>
          <input type='text' name='country' onChange={handleChange} value={form.country} placeholder='*Required'/>
        </div>
        <div className={style.content}>
            <label>Start Date</label>
            <div style={{display:'flex'}}>
            <select value={form.startDateMonth} name='startDateMonth' onChange={handleChange}>
                  <option>Month</option>
                  {
                      [...Month].map(ele=> <option key={ele} value={ele}>{ele}</option>)
                  }
              </select>
              <select value={form.startDateYear} name='startDateYear' onChange={handleChange}>
                  <option>Year</option>
                  {
                      [...Year].map(ele=> <option key={ele}  value={ele}>{ele}</option>)
                  }
              </select>
            </div>
        </div>
        <div className={style.content }>
          <label>End Date</label>
          <div style={{display:'flex' , justifyContent:'space-evenly'}}>
              <select value={form.endDateMonth} name='endDateMonth' onChange={handleChange}>
                  <option>Month</option>
                  {
                      [...Month].map(ele=> <option key={ele}  value={ele}>{ele}</option>)
                  }
              </select>
              <select value={form.endDateYear} name='endDateYear' onChange={handleChange}>
                  <option>Year</option>
                  {
                      [...Year].map(ele=> <option key={ele}  value={ele}>{ele}</option>)
                  }
              </select>
          </div>
        </div>
        <div className={style.content, style.checkBox}>
              <input type='checkbox'/>
              <label>Currently Work Here</label>
          </div>
        <div>
          <div className={style.content, style.btn}>
            <Link to='/education' onClick={handleClick}>
              <button className={style.saveBtn}>ENTER JOB DESCRIPTION</button>
            </Link>
          </div>
          <div className={style.back}>
            <Link to='/work'  className={style.link}>&lt; Back</Link>
          </div>
        </div>
      </div>
    </div>

  )
}














































 // title:ChangeWork.title,
    // company:ChangeWork.company,
    // city:ChangeWork.city,
    // country:ChangeWork.country,
    // startDateMonth:ChangeWork.startDateMonth,
    // startDateYear:ChangeWork.startDateYear,
    // endDateMonth:ChangeWork.endDateMonth,
    // endDateYear:ChangeWork.endDateYear


     // obj.title=form.title;
    // obj.company=form.company;
    // obj.city=form.city;
    // obj.country=form.country;
    // obj.startDateMonth=form.startDateMonth
    // obj.startDateYear=form.startDateYear;
    // obj.endDateMonth=form.endDateMonth
    // obj.endDateYear=form.endDateYear;