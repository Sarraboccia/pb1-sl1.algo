// import logo from './logo.svg';
import "./App.css";
import Address from "./Components/Profile/Address";
import FullName from "./Components/Profile/FullName";
import ProfilePhoto from "./Components/Profile/ProfilePhoto";
import Sara from "./Gomycode.jpeg";

function App() {
  return (
    <div className="all">
      <div>
        <FullName />
        <ProfilePhoto />
      </div>

      <div className="introduction">
        <h5 className='Colors'>Date Of Birth : 21/07/1997 </h5>
        <div className="logo">
          <h4 className='Colors'> Student : In </h4>
          <img src={Sara} alt="sara" width="220" />
        </div>
        <h3 className='Colors'> Occupation : Futur Web Developer </h3>
        <Address />
      </div>
    </div>
  );
}

export default App;
