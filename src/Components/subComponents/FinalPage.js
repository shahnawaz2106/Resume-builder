import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFinal } from "../../actions/actions";
import styles from "../../Styles/final.module.css";
import Template1 from "./Template1";
import Template2 from "./Template2";
import Template3 from "./Template3";
import ReactToPrint from "react-to-print";

export default function FinalPage() {
  const componentRef = useRef();
  const { ChangeFinal } = useSelector((state) => state);
  const [form, setForm] = useState(ChangeFinal);
  const dispatch = useDispatch();
  const clrArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  useEffect(() => {
    dispatch(setFinal(form));
  }, [form]);

  return (
    <div className={styles.container}>
      <div  ref={componentRef} style={{padding:'0px'}}>
        {form.template === "1" && <Template1 />}
        {form.template === "2" && <Template2 />}
      </div>
      {/* <Template3/> */}
      <div className={styles.rightContainer}>
        <div className={styles.heading}>
          <p
            style={{
              fontWeight: "800",
              fontSize: "30px",
              marginBottom: "-2px",
            }}
          >
            Here’s Your Resume!
          </p>
          <p>What do you want to do next?</p>
        </div>
        <p style={{ fontWeight: "600" }}>Export Options</p>
        <div className={styles.content}>
          {/* <button className={styles.Btn} style={{ background: "#94DD46" }}>
            Download
          </button> */}
          <ReactToPrint
            content={() => componentRef.current}
            trigger={() => (
              <button className={styles.Btn} style={{ background: "#94DD46" }}>
                Download
              </button>
            )}
          />
        </div>
        <div className={styles.content}>
          <button className={styles.Btn}>Print</button>
        </div>
        <div className={styles.content}>
          <button className={styles.Btn}>Email</button>
        </div>
        <hr></hr>
        <p style={{ fontWeight: "600" }}>Formatting Options</p>
        <div>
          <label>Layout</label>
          <div className={styles.layout}>
            <div>CONDENSED</div>
            <div>STRANDARD</div>
            <div>EXPANDED</div>
          </div>
        </div>
        <div className={styles.styl}>
          <div style={{ marginRight: "10px" }}>
            <label>Font Style</label>
            <select
              style={{ margin: "10px 0px" }}
              onChange={handleChange}
              name="fontFamily"
            >
              <option value="1">Raleway</option>
              <option value="2">Ubuntu</option>
              <option value="3">MontSerrat</option>
              <option value="4">Source Sans Pro</option>
              <option value="5">Hind</option>
              <option value="6">Times New Roman</option>
            </select>
          </div>
          <div>
            <label>Font Size</label>
            <select
              style={{ margin: "10px 0px" }}
              onChange={handleChange}
              name="fontSize"
            >
              {/* Size */}
              <option value="1">Small</option>
              <option value="2">Medium</option>
              <option value="3">Large</option>
            </select>
          </div>
        </div>
        <div>
          <label>Colors</label>
          <div className={styles.colurs}>
            {clrArr.map((e) => (
              <div className={styles.clr}>
                <input
                  type="checkbox"
                  name="color"
                  value={e}
                  onClick={handleChange}
                  className={`${styles.ckbx}`}
                  id={`color${e}`}
                />
              </div>
            ))}
          </div>
        </div>
        <hr></hr>
        <div className={styles.content}>
          <button className={styles.Btn}>+ Add New Section</button>
        </div>
        <div className={styles.content}>
          <button className={styles.Btn}>Change Template</button>
        </div>
        <div className={styles.templateBtn}>
          <button value="1" name="template" onClick={handleChange}>
            Hospilatity
          </button>
          <button value="2" name="template" onClick={handleChange}>
            Impresa
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

// const nameInitial = ChangeName.name.substring(0, 1);
// const arr = ChangeName.name.split(" ");
// const colorClass = "color" + form.color;
// const fontFamilyClass='fontFamily'+form.fontFamily;
// const fontClass='fontSize'+form.fontSize;

{
  /* 
            <div className={styles.clr} style={{ background: "black" }}></div>
            <div className={styles.clr} style={{ background: "#AC7BAE" }}></div>
            <div className={styles.clr} style={{ background: "#305FEC" }}></div>
            <div className={styles.clr} style={{ background: "#6CA7BA" }}></div>
            <div className={styles.clr} style={{ background: "#E5A3A1" }}></div>
            <div className={styles.clr} style={{ background: "#9B9B9B" }}></div>
            <div className={styles.clr} style={{ background: "#EF943A" }}></div>
            <div className={styles.clr} style={{ background: "#ACB75A" }}></div>
            <div className={styles.clr} style={{ background: "#2F527B" }}></div> */
}

{
  /* <div className={`${styles.leftContainer} ${fontClass}`} id={`${fontFamilyClass} `}>
  {ChangeName.name === "" || ChangeName.email === "" ? (
    <div></div>
  ) : (
    <div className={styles.contact}>
      <div style={{ display: "flex" }}>
        {arr.length <= 1 ? (
          <div className={`${styles.starting}`} id={`${colorClass}`}>{nameInitial}</div>
        ) : (
          <div className={`${styles.starting}`} id={`${colorClass}`}>
            <div
              style={{
                fontSize: "40px",
                position: "absolute",
                top: "1px",
                left: "5px",
              }} 
            >
              {arr[0].substring(0, 1)}
            </div>
            <div className={styles.slant}>|</div>
            <div
              style={{
                fontSize: "40px",
                position: "absolute",
                bottom: "1px",
                right: "5px",
              }}
            >
              {arr[1].substring(0, 1)}
            </div>
          </div>
        )}
        <h1 style={{ marginLeft: "20px", textTransform: "uppercase" }}>
          {ChangeName.name}
        </h1>
      </div>
      <div className={styles.details}>
        <span>{ChangeName.address}</span>
        {","}
        <span>{ChangeName.city}</span>
        {","}
        <span>{ChangeName.country}</span>
        {","}
        <span>{ChangeName.phone}</span>
        {","}
        <span>{ChangeName.email}</span>
      </div>
    </div>
  )}

  {ChangeSummary === "" ? (
    <div></div>
  ) : (
    <div className={styles.summary}>
      <p style={{ fontWeight: "800" }}>PROFESSIONAL SUMMARY</p>
      <div style={{ padding: "10px 15px", border: "1px solid black" }}>
        {ChangeSummary}
      </div>
    </div>
  )}
  
  {ChangeSkills.length === 0 ? (
    <div></div>
  ) : (
    <div className={styles.skills}>
      <p style={{ fontWeight: "800" }}>SKILLS</p>
      <ul className={styles.list}>
        {ChangeSkills.map((ele) => (
          <li>{ele}</li>
        ))}
      </ul>
    </div>
  )}
  
  {ChangeWork.title === "" ? (
    <div></div>
  ) : (
    <div className={styles.exp}>
      <p style={{ fontWeight: "800" }}>EXPERIENCE</p>
      <div style={{ position: "relative", border: "1px solid black" }}>
        <span>{ChangeWork.title}</span>
        <div
          style={{
            position: "absolute",
            top: "0px",
            right: "2px",
            display: "flex",
          }}
        >
          <div style={{ margin: "0px 10px" }}>
            <span>{ChangeWork.startDateMonth}</span>{" "}
            <span>{ChangeWork.startDateYear}</span>
            {","}
          </div>
          <div>
            <span>{ChangeWork.endDateMonth}</span>{" "}
            <span>{ChangeWork.endDateYear}</span>
          </div>
        </div>
      </div>
      <div style={{ margin: "10px 0px" }}>
        <span>{ChangeWork.company}</span>
        <span style={{ margin: "0px 7px" }}>|</span>
        <span>{ChangeWork.city}</span> <span>{ChangeWork.country}</span>
      </div>
      <span style={{ marginLeft: "10px" }}>Description</span>
    </div>
  )}
  
  {ChangeEducation.school === "" ? (
    <div></div>
  ) : (
    <div className={styles.education}>
      <p style={{ fontWeight: "800" }}>EDUCATION</p>
      <div style={{ display: "flex", position: "relative" }}>
        <span>{ChangeEducation.degree}</span>
        <div
          style={{
            position: "absolute",
            top: "0px",
            right: "2px",
            display: "flex",
          }}
        >
          <span>{ChangeEducation.month}</span>
          <span>{ChangeEducation.year}</span>
        </div>
      </div>
      <div>
        <span>School Name</span>
        {", "}
        <span>city</span> <span>Country</span>
      </div>
    </div>
  )}
  <div className={styles.newSection}>
    <h1 style={{ fontSize: "20px" }}>+ ADD NEW SECTION</h1>
  </div>
</div> */
}
