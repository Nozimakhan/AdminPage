import './App.css';
import Main from './components/main/Main';
import Nav from './components/nav/Nav';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <>
      <div className="container">
        <div className="main__container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="main__wrapper">
            <Nav />
            <Main />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
