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
import UsersContainer from './Components/Users/UsersContainer';

const App =  props => {
  return(
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
      <Routes>
        <Route path="/" element={
            <Profile />
          } 
        />
        <Route path="/dialogs/*" element={
            <DialogsContainer />
          }  
        />
        <Route path="/users" element={
            <UsersContainer />
          }  
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
