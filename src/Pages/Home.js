import { addDoc, collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setForm } from '../actions/actions';
import ChangeName from '../reducers/reducer';
import style from '../Styles/home.module.css';
import { db } from '../firebase-config';

export default function Home() {
  const {ChangeName,UserR}=useSelector((state)=>state)
  const [form,setform]=useState(ChangeName);
  const dispatch=useDispatch();
  const userCollectionRef=collection(db,'users');
  const {uid}=UserR;
  
  function handleChange(e){
    let {name,value}=e.target;
    setform({
      ...form,
      [name]:value
    })
  }
  
 async function handleClick (){
    dispatch(setForm(form));
    const userDoc=doc(db,'users',uid);
    let user=await getDoc(userDoc);
    user=user.data();
    await setDoc(userDoc,{...user,contact:form});
  }

  return (
    <div styles={{width:"100%", height:"100%"}}>
      <div className={style.container}>
        <div className={style.heading}>
          <p className={style.about}>Tell us about yourself</p>
          <p>With this info, recruiters will be able to find you</p>
        </div>
        <div className={style.content}>
          <label>Name</label>
          <input type='text' placeholder='*Required' value={form.name} onChange={handleChange} name='name'/>
        </div>
        <div className={style.content, style.emails}>
          <div >
            <label>Email</label>
            <input type='text' placeholder='*Required' value={form.email} onChange={handleChange} name='email'/>
          </div>
          <div className={style.checkBox}>
            <input id="IsEmailHidden" type="checkbox"  name="IsEmailHidden"/>
            <label>Don't show on my resume</label>
          </div>
        </div>
        <div className={style.content}>
          <div>
            <label>Street Address</label>
            <input type='text' placeholder='*Required' value={form.address} onChange={handleChange} name='address'/>
          </div>
        </div>
        <div className={style.content}> 
          <label>City</label>
          <input type='text' placeholder='*Required' value={form.city} onChange={handleChange} name='city'/>
        </div>
        <div className={style.content}>
          <label>Country</label>
          <input type='text' placeholder='*Required' value={form.country} onChange={handleChange} name='country'/>
        </div>
        <div className={style.phone }>
          <div>
            <label>Phone Number</label>
            <input type='text' placeholder='*Required' value={form.phone} onChange={handleChange} name='phone'/>
          </div>
          <div>
            <Link to="/" className={style.link}>
              + Add another number
            </Link>
          </div>
        </div>
        <div>
          <div className={style.content, style.btn}>
            <Link to='/work'onClick={handleClick}>
              <button className={style.saveBtn} >SAVE & CONTINUE</button>
            </Link>
          </div>
          <div className={style.back}>
            <Link to='/'  className={style.link}>&lt; Back</Link>
          </div>
        </div>
      </div>
    </div>

  )
}





















































 // const [Name,setName]=useState(ChangeName.name);
  // const [Email,setEmail]=useState(ChangeName.email);
  // const [Address,setAddress]=useState(ChangeName.address);
  // const [form, setform]=useState({
  //   name:ChangeName.name,
  //   email:ChangeName.email,
  //   address:ChangeName.address,
  //   city:ChangeName.city,
  //   country:ChangeName.country,
  //   phone:ChangeName.phone
  // })





   // const obj={};
    // obj.name=form.name;
    // obj.email=form.email;
    // obj.address=form.address;
    // obj.city=form.city;
    // obj.country=form.country;
    // obj.phone=form.phone;
    // console.log(obj);



  // if(name=='name'){
    //   setName(value);
    //   console.log(Name);
    // }else if(name=='email'){
    //   setEmail(value);
    // }else if(name=='address'){
    //   setAddress(value);
    // }


