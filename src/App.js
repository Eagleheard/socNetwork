import { Route } from 'react-router';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';






function App(props) {

  return (

    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <DialogsContainer
          store={props.store} dispatch={props.dispatch} />
        } />
        <Route path='/profile/:UserId?' render={() => <ProfileContainer
          store={props.store} dispatch={props.dispatch}
        />}
        />
        <Route path='/users' render={() => <UsersContainer
          store={props.store} dispatch={props.dispatch} />}
        />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>

  );
}


export default App;
