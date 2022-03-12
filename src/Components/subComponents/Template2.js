import React from "react";
import { useSelector } from "react-redux";
import styles from "../../Styles/template2.module.css";

export default function Template2() {
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
      <div className={`${styles.leftContainer} fontFamily${fontFamily}`}>
        {/* Contact */}
        <div className={styles.leftPart}>
          {ChangeName.name === "" || ChangeName.email === "" ? (
            <div></div>
          ) : (
            <div className={styles.starting}>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "normal",
                  textTransform: "uppercase",
                }}
              >
                {ChangeName.name}
              </h1>
              <div className={styles.details}>
                <span>{ChangeName.phone}</span>
                <span>{ChangeName.email}</span>
                <span>{ChangeName.address}</span>
                <span>{ChangeName.city}</span>
                <span>{ChangeName.country}</span>
              </div>
            </div>
          )}
        </div>
        <div className={styles.rightPart}>
          {/* Summary */}
          {ChangeSummary === "" ? (
            <div></div>
          ) : (
            <div className={styles.summary}>
              <div>
                <p className={styles.title}>PROFESSIONAL SUMMARY</p>
              </div>
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
              <div>
                <p className={styles.title}>SKILLS</p>
              </div>
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
              <div>
                <p className={styles.title}>EXPERIENCE</p>
              </div>
              <div style={{ position: "relative"}}>
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
              <div>
                <p className={styles.title}>EDUCATION</p>
              </div>
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
    </div>
  );
}
