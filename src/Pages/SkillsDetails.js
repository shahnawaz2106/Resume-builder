import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import style from "../Styles/skillsDetails.module.css";
import ChangeSkills from "../reducers/skillreducer";
import { useSelector } from "react-redux";
import { setForm, setSkills } from "../actions/actions";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase-config";

export default function SkillsDetails() {
  const dispatch = useDispatch();
  const { ChangeSkills,UserR } = useSelector((state) => state);
  const [form, setForm] = useState([]);
  const {uid}=UserR;
  useEffect(() => {
    setForm(ChangeSkills);
  }, []);

  function addSkills() {
    setForm([...form, ""]);
    console.log(form);
  }
  function deleteSkills(e) {
    // form []
    // filter that id which you want to delete
    //
    let newArr = form.filter((ele) => ele !== e);
    console.log(newArr);
    setForm(newArr);
  }
  useEffect(() => {
    dispatch(setSkills(form));
  }, [form]);
 async function handleClick() {
    dispatch(setSkills(form));
    const userDoc=doc(db,'users',uid);
    let user=await getDoc(userDoc);
    user=user.data();
    await setDoc(userDoc,{...user,skills:form});
  }

  return (
    <div styles={{ width: "100%", height: "100%" }}>
      <div className={style.container}>
        <div className={style.heading}>
          <p className={style.about}>Skills</p>
          <p>Add a few skills to show employers what you're good at.</p>
        </div>

        {form.map((ele, id) => (
          <div key={id} className={style.content}>
            <div style={{ padding: "10px" }}>
              <i
                className="fas fa-exchange-alt"
                style={{ transform: "rotate(90deg)", color: "#54ACBB" }}
              ></i>
            </div>
            <input
              type="text"
              value={ele}
              onChange={(e) => {
                form[id] = e.target.value;
                setForm([...form]);
              }}
              placeholder="Skills"
            />
            <button className={style.trash} onClick={() => deleteSkills(ele)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        ))}
        <div className={`${style.content} ${style.checkBox}`}>
          <button
            style={{
              fontWeight: "normal",
              background: "white",
              border: "none",
              color: "#54ACBB",
              cursor: "pointer",
            }}
            onClick={addSkills}
          >
            + Add another skill
          </button>
        </div>
        <div className={(style.content, style.add)}>
          <button className={style.addBtn}>
            <i
              className="fa fa-plus-circle"
              style={{
                color: "white",
                background: "#03ACBB",
                borderRadius: "100%",
                fontSize: "15px",
                marginRight: "10px",
              }}
            ></i>
            Add Pre-Written Examples
          </button>
        </div>
        <div>
          <div className={(style.content, style.btn)}>
            <Link to="/summary" onClick={handleClick}>
              <button className={style.saveBtn}>SAVE & CONTINUE</button>
            </Link>
          </div>
          <div className={style.back}>
            <Link to="/skills" className={style.link}>
              &lt; Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className={style.content}>
<div style={{ padding: "10px" }}>
    <i
      className="fas fa-exchange-alt"
      onBlur={handleChange}
      style={{ transform: "rotate(90deg)", color: "#54ACBB" }}
    ></i>
  </div>
  <input type="text" placeholder="Skills 7" />
  <div className={style.trash}>
    <i className="fa fa-trash"></i>
  </div>
</div> */
}
