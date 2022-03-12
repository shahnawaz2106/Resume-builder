import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Layout from './Components/Layout';
import Home from './Pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import GettingStarted from './Pages/GettingStarted';
import WorkExp from './Pages/WorkExp';
import WorkDetails from './Pages/WorkDetails';
import Education from './Pages/Education';
import EdDetails from './Pages/EdDetails';
import Skills from './Pages/Skills';
import SkillsDetails from './Pages/SkillsDetails';
import Summary from './Pages/Summary';
import SummaryDetails from './Pages/SummaryDetails';
import FinalPage from './Components/subComponents/FinalPage';
import { db } from './firebase-config';
import {collection, getDocs} from 'firebase/firestore'
function App() {
  // const [user,setUser]=useState([]);
  // const userCollectionRef=collection(db,"users");
  
  // useEffect(()=>{
  //   const getUsers= async ()=>{
  //     const data=await getDocs(userCollectionRef);
  //     setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  //     // console.log(data);
  //   }
  //   getUsers()
  // },[]);
  // console.log(user);
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<GettingStarted/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/work" element={<WorkExp/>}/>
          <Route path='/workDetails' element={<WorkDetails/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/edDetails' element={<EdDetails/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/skillsDetails' element={<SkillsDetails/>}/>
          <Route path='/summary' element={<Summary/>}/>
          <Route path='/summaryDetails' element={<SummaryDetails/>}/>
          <Route path='/final' element={<FinalPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
