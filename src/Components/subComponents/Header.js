import { faFileText } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../Styles/header.module.css";
import { userDetails } from "../../actions/actions";
import { getAuth, signOut } from "firebase/auth";

export default function Header() {
  const { UserR } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  function Logout() {
    signOut(auth)
      .then(() => {
        const nullUser = {
          id: "",
          email: "",
          name: "",
        };
        dispatch(userDetails(nullUser));
        navigate("/login");
      })
      .catch((error) => {
        
      });
  }
  return (
    <>
      <div className={styles.logo}>
        <Link to="/">
          {/* <i
            className="fa fa-file-text-o"
            style={{ fontSize: "40px", color: "blue" }}
          ></i> */}
          <FontAwesomeIcon
            icon={faFileText}
            style={{ fontSize: "40px", color: "blue" }}
          />
        </Link>
      </div>
      <div className={styles.contents}>
        <div>Resume Templates</div>
        <div>About Us</div>
        <div className={styles.signupbtn}>
          {UserR.email !== "" ? (
            <div>{UserR.email}</div>
          ) : (
            <Link to="/signup" style={{ textDecoration: "none" }}>
              Register
            </Link>
          )}
        </div>
        <div className={styles.loginbtn}>
          {UserR.email !== "" ? (
            <button
              className={styles.logoutBtn}
              type="button"
              onClick={Logout}
              style={{ textDecoration: "none", background: "inherit" }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
