import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFinal } from "../../actions/actions";
import styles from "../../Styles/final.module.css";

export default function Template1() {
  const {
    ChangeName,
    ChangeWork,
    ChangeEducation,
    ChangeSkills,
    ChangeSummary,
    ChangeFinal,
  } = useSelector((state) => state);
  const nameInitial = ChangeName.name.substring(0, 1);
  const arr = ChangeName.name.split(" ");
  //   const [form] = useState(ChangeFinal);
  const { color, fontFamily, fontSize } = ChangeFinal;
    console.log(`fontFamily${fontFamily}`);

  return (
    <div>

      <div
        className={`${styles.leftContainer} fontFamily${fontFamily}`}        
      >
        {ChangeName.name === "" || ChangeName.email === "" ? (
          <div></div>
        ) : (
          <div className={styles.contact} >
            <div style={{ display: "flex" }}>
              {arr.length <= 1 ? (
                <div className={`${styles.starting}`} id={`color${color}`}>
                  {nameInitial}
                </div>
              ) : (
                <div className={`${styles.starting}`} id={`color${color}`}>
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
        {/* summary */}
        {ChangeSummary === "" ? (
          <div></div>
        ) : (
          <div className={styles.summary}>
            <p style={{ fontWeight: "800" }}>PROFESSIONAL SUMMARY</p>
            <div style={{ padding: "10px 15px" }}>
              {ChangeSummary}
            </div>
          </div>
        )}
        {/* skills */}
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
        {/* Experience */}
        {ChangeWork.title === "" ? (
          <div></div>
        ) : (
          <div className={styles.exp}>
            <p style={{ fontWeight: "800" }}>EXPERIENCE</p>
            <div style={{ position: "relative" }}>
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
        {/* Education */}
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
      </div>
    </div>
  );
}
