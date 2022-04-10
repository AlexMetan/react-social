import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Music from './Components/Music/Music';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from './Components/withRouter/withRouter';
import { initAppTC } from './redux/appReducer';
import Preloader from './Components/Common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount(){
    this.props.initApp();
  }

  render(){
    if(!this.props.initialized){
      return <Preloader/>
    } else{
      return(
        <div className='app-wrapper'>
          <HeaderContainer/>
          <Navbar/>
          <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/" element={
                <ProfileContainer />
              } 
            />
            <Route  path="/profile/:id" element={
                <ProfileContainer />
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
            <Route path="/login" element={
                <Login />
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
  }
} 

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default compose(
  withRouter,
  connect(mapStateToProps,{initApp: initAppTC})
)(App);
