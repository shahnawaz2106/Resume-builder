import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { createRef, useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userDetails } from "../actions/actions";
import UserR from "../reducers/userReducer";
import styles from "../Styles/signup.module.css";

export default function Login() {
  const navigate = useNavigate();
  const {UserR}=useSelector((state)=>state)
  const [loading, setLoading] = useState(false);
  const [user, setuser] = useState(UserR);
  const dispatch=useDispatch();
  const emailRef = createRef(null);
  const passwordRef = createRef(null);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  

  function handleClickGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        const token = credential.accessToken;
        const user = result.user;
        const {uid,email,displayName}=user;
        setuser({
          uid:uid,
          email:email,
          name:displayName
        });
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
      });
  }
  function handleClick() {
    setLoading(true);
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        const {uid,email,displayName}=user;
        console.log(user);
        setLoading(false);
        setuser({
          uid:uid,
          email:email,
          name:displayName
        });
        
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
      });
  }
  useEffect(()=>{
    dispatch(userDetails(user));
  },[user])
  return (
    <>
    {loading ? (
      <div className={styles.load}>
        <TailSpin color="#00BFFF" height={200} width={200} />
        <p>Loading.....</p>
      </div>
    ) : (
      <div className={styles.formCard}>
        <h2 className={`${styles.formHeading} center`}>Enter your details</h2>
        <div className={styles.formSection}>
          <div className={`${styles.inputGroup} full`}>
            <label>Email</label>
            <div className={styles.effect}>
              <input type="text" name="email" ref={emailRef} />
            </div>
          </div>
          <div className={`${styles.inputGroup} ${styles.full}`}>
            <label>Password</label>
            <div className={styles.effect}>
              <input type="password" name="password" ref={passwordRef} />
            </div>
          </div>
          <div className={styles.formButtons}>
            <button
              className={`${styles.btn} ${styles.hvr_float_shadow}`}
              type="button"
              onClick={handleClick}
            >
              Login
            </button>
            <button
              className={`${styles.btnGoogle} ${styles.hvr_float_shadow}`}
              type="button"
              onClick={handleClickGoogle}
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="18px"
                viewBox="0 0 48 48"
                className="abcRioButtonSvg"
                style={{margin:'0px 20px'}}
              >
                <g>
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </g>
              </svg>
              Sign In
            </button>
          </div>
        </div>
      </div>
    )}
  </>
  );
}
