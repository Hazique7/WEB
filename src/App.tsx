import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import About from './components/about/About';
import Addmission from './components/addmission form/Addmission';
import Contact from './components/Contact/contact';
import COURSECard from './components/courses/Courses';
import Media from './components/media/Media';
import Nav from './components/navbar/NAVBAR2';
import ISlider from './components/slider/Slider';

function App() {
  return (
  <div className="App">
       <BrowserRouter>
  
  <Nav/>
    <ISlider/>
    <h1 className='course' > COURSES</h1>
   <COURSECard img = "https://www.wanderglobe.org/wp-content/uploads/2021/05/Web-Development-Languages.jpg "
   title="WEB-DEVELOPMENT"/>
   <COURSECard img = "https://erfolg-magazin.de/wp-content/uploads/2018/01/Digitalisierung.jpg"
   title="NETWORKING"/>
   <COURSECard img = "http://edelalon.com/blog/wp-content/uploads/2018/01/marketing.jpg"
   title="MARKETING" />
   <COURSECard img = "https://th.bing.com/th/id/R.f29280f0f404416d167c590f59d91b29?rik=%2fAQFqcMOZDB28g&pid=ImgRaw&r=0"
   title="MOBILE REPAIRING"/>
   <COURSECard img = "https://miro.medium.com/max/628/1*UTh2YKtQH07DSCxjHc2mHA.png"
   title="AI & CHAT-BOT"/>
   <COURSECard img = "https://i.pinimg.com/originals/8c/eb/0e/8ceb0ef69fc5347f97752e3808d133e5.jpg "
   title="GRAPHIC DESIGNING"/>
 
   <Addmission />
   <Media />
    <About /> 
   
    <Contact /> 
  
   </BrowserRouter>
    </div>
  );
}

export default App;
