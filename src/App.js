import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Header from './Components/Header/Header';
import Music from './Components/Music/Music';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import Profile from './Components/Profile/Profile';

const App =  props => {
  return(
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
      <Routes>
        <Route path="/" element={
          <Profile 
            store={props.store}
          />} 
        />
        <Route path="/dialogs/*" element={
          <DialogsContainer 
            store={props.store}
          />}  
        />
        <Route path="/news" element={<News/>}  />
        <Route path="/music" element={<Music/>}  />
        <Route path="/settings" element={<Settings/> }  />
      </Routes>
      </div>
    </div>
  )
} 
  

export default App;
